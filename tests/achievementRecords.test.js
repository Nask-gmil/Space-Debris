import assert from 'node:assert/strict'
import test from 'node:test'
import {
  ACHIEVEMENT_DATA_VERSION,
  ACHIEVEMENT_STORAGE_KEY,
  createInitialAchievementRecords,
  getJapanDateKey,
  loadAchievementRecords,
  recordAchievementUnlock,
  recordCelestialBodyCreated,
  recordCreatedGenre,
  recordFoodEdit,
  recordFoodRegistration,
  recordGenreEvolutionStage,
  recordHighestEvolutionStage,
  reconcileAchievementRecords,
  saveAchievementRecords,
} from '../src/data/achievementRecords.js'

const makeFood = (id, calories, registeredAt) => ({ id, calories, registeredAt })

const createStorage = () => {
  const values = new Map()
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    values,
  }
}

test('uses the Asia/Tokyo calendar date at UTC day boundaries', () => {
  assert.equal(getJapanDateKey('2025-01-01T14:59:59.000Z'), '2025-01-01')
  assert.equal(getJapanDateKey('2025-01-01T15:00:00.000Z'), '2025-01-02')
  assert.equal(getJapanDateKey('not a date'), null)
})

test('counts a registration event only once and keeps one date per Tokyo day', () => {
  const registeredAt = '2025-01-01T15:00:00.000Z'
  const first = makeFood('food-1', 300, registeredAt)
  let records = createInitialAchievementRecords()
  records = recordFoodRegistration(records, first, 'Ramen')
  records = recordFoodRegistration(records, first, 'Ramen')
  records = recordFoodRegistration(records, makeFood('food-2', 500, '2025-01-02T03:00:00.000Z'), 'Ramen')

  assert.equal(records.lifetimeRegistrationCount, 2)
  assert.equal(records.lifetimeCalories, 800)
  assert.deepEqual(records.lifetimeCaloriesByGenre, { Ramen: 800 })
  assert.deepEqual(records.registrationDates, ['2025-01-02'])
})

test('edits apply only the calorie difference and are idempotent', () => {
  const food = { ...makeFood('food-1', 300, '2025-02-01T03:00:00.000Z'), name: '旧名', storeName: '旧店' }
  let records = recordFoodRegistration(createInitialAchievementRecords(), food, 'Ramen')
  const editedDetails = { name: '新名', storeName: '新店', genre: 'Ramen' }
  records = recordFoodEdit(records, food.id, 300, 450, editedDetails)
  records = recordFoodEdit(records, food.id, 300, 450, editedDetails)

  assert.equal(records.lifetimeRegistrationCount, 1)
  assert.equal(records.lifetimeCalories, 450)
  assert.deepEqual(records.lifetimeCaloriesByGenre, { Ramen: 450 })
  assert.equal(records.processedFoodEntries[food.id].name, '新名')
  assert.equal(records.processedFoodEntries[food.id].storeName, '新店')
  assert.deepEqual(records.registrationDates, ['2025-02-01'])
})

test('edits to pre-feature meals update global totals but not genre totals', () => {
  const food = {
    ...makeFood('legacy-food', 300, '2025-02-15T03:00:00.000Z'),
    name: '旧メニュー',
  }
  let records = createInitialAchievementRecords([{
    genre: 'Ramen',
    calories: 300,
    foods: [food],
  }])
  records = recordFoodEdit(records, food.id, 300, 200, {
    name: '編集後メニュー',
    genre: 'Ramen',
  })

  assert.equal(records.lifetimeCalories, 200)
  assert.deepEqual(records.lifetimeCaloriesByGenre, {})
  assert.equal(records.processedFoodEntries[food.id].name, '編集後メニュー')
  assert.equal(records.processedFoodEntries[food.id].genreStatsEligible, false)
})

test('migrates available legacy history, genres, and current evolution stages', () => {
  const stars = [
    {
      genre: 'ラーメン',
      calories: 3000,
      foods: [makeFood('food-1', 1000, '2025-03-01T03:00:00.000Z')],
    },
    {
      genre: 'カレー',
      calories: 800,
      foods: [makeFood('food-2', 800, '2025-03-02T03:00:00.000Z')],
    },
  ]
  const records = createInitialAchievementRecords(stars)

  assert.equal(records.lifetimeRegistrationCount, 2)
  assert.equal(records.lifetimeCalories, 3800)
  assert.deepEqual(records.lifetimeCaloriesByGenre, {})
  assert.equal(records.lifetimeCelestialBodyCount, 2)
  assert.deepEqual(records.registrationDates, ['2025-03-01', '2025-03-02'])
  assert.deepEqual(records.createdGenres, ['ラーメン', 'カレー'])
  assert.equal(records.highestEvolutionStage, '巨大惑星')
  assert.deepEqual(records.highestEvolutionStages, {
    ラーメン: '巨大惑星',
    カレー: '小惑星',
  })
  assert.deepEqual(Object.keys(records.processedFoodEntries).sort(), ['food-1', 'food-2'])
})

test('reconciliation applies missing edits and registrations without losing deleted history', () => {
  const firstFood = { ...makeFood('food-1', 300, '2025-04-01T03:00:00.000Z'), name: 'Old meal' }
  let records = createInitialAchievementRecords([{ genre: '麺', calories: 300, foods: [firstFood] }])
  const editedFood = { ...firstFood, calories: 500, name: 'Edited meal' }
  const newFood = { ...makeFood('food-2', 200, '2025-04-02T03:00:00.000Z'), name: 'New meal' }
  records = reconcileAchievementRecords(records, [
    { genre: '麺', calories: 700, foods: [editedFood, newFood] },
  ])
  records = recordGenreEvolutionStage(records, '麺', '巨大惑星')

  const afterSupernova = reconcileAchievementRecords(records, [])
  assert.equal(afterSupernova.lifetimeRegistrationCount, 2)
  assert.equal(afterSupernova.lifetimeCalories, 700)
  assert.deepEqual(afterSupernova.lifetimeCaloriesByGenre, { 麺: 200 })
  assert.deepEqual(afterSupernova.registrationDates, ['2025-04-01', '2025-04-02'])
  assert.deepEqual(afterSupernova.createdGenres, ['麺'])
  assert.equal(afterSupernova.highestEvolutionStage, '巨大惑星')
  assert.deepEqual(afterSupernova.highestEvolutionStages, { 麺: '巨大惑星' })
  assert.equal(afterSupernova.lifetimeCelestialBodyCount, 1)
  assert.equal(afterSupernova.processedFoodEntries['food-1'].name, 'Edited meal')
  assert.equal(afterSupernova.processedFoodEntries['food-2'].name, 'New meal')
})

test('persists unlock timestamps and reloads without double-counting legacy food', () => {
  const storage = createStorage()
  const legacyStars = [{
    genre: '定食',
    calories: 250,
    foods: [makeFood('food-1', 250, '2025-05-01T03:00:00.000Z')],
  }]
  let loaded = loadAchievementRecords(storage, legacyStars)
  loaded.records = recordAchievementUnlock(loaded.records, 'first-meal', '2025-05-01T03:00:00.000Z')
  saveAchievementRecords(storage, loaded.records)

  const reloaded = loadAchievementRecords(storage, legacyStars)
  const saved = JSON.parse(storage.getItem(ACHIEVEMENT_STORAGE_KEY))
  assert.equal(saved.version, ACHIEVEMENT_DATA_VERSION)
  assert.equal(reloaded.records.lifetimeRegistrationCount, 1)
  assert.equal(reloaded.records.lifetimeCalories, 250)
  assert.equal(reloaded.records.unlockedAchievements['first-meal'], '2025-05-01T03:00:00.000Z')
})

test('keeps genres and highest stage monotonic', () => {
  let records = createInitialAchievementRecords()
  records = recordCreatedGenre(records, 'Ramen')
  records = recordCreatedGenre(records, 'ramen')
  records = recordHighestEvolutionStage(records, '巨大惑星')
  records = recordHighestEvolutionStage(records, '微惑星')

  assert.deepEqual(records.createdGenres, ['Ramen'])
  assert.equal(records.highestEvolutionStage, '巨大惑星')
})

test('tracks independent highest evolution stages by genre and keeps them after reset', () => {
  let records = createInitialAchievementRecords()
  records = recordGenreEvolutionStage(records, '寿司', '地球型惑星')
  records = recordGenreEvolutionStage(records, 'ラーメン', '赤色矮星')
  records = recordGenreEvolutionStage(records, '寿司', '小惑星')
  records = recordGenreEvolutionStage(records, 'ラーメン', '赤色矮星')

  assert.deepEqual(records.highestEvolutionStages, {
    寿司: '地球型惑星',
    ラーメン: '赤色矮星',
  })

  records = recordGenreEvolutionStage(records, '寿司', '巨大惑星')
  assert.equal(records.highestEvolutionStages['寿司'], '巨大惑星')

  const afterSupernova = reconcileAchievementRecords(records, [])
  assert.deepEqual(afterSupernova.highestEvolutionStages, {
    寿司: '巨大惑星',
    ラーメン: '赤色矮星',
  })
})

test('counts celestial bodies at creation only, independently from meal registrations', () => {
  let records = createInitialAchievementRecords()
  records = recordCelestialBodyCreated(records, 'Ramen')
  records = recordFoodRegistration(
    records,
    makeFood('food-1', 300, '2025-07-01T03:00:00.000Z'),
    'Ramen',
  )
  records = recordFoodRegistration(
    records,
    makeFood('food-2', 200, '2025-07-02T03:00:00.000Z'),
    'Ramen',
  )
  assert.equal(records.lifetimeCelestialBodyCount, 1)

  records = reconcileAchievementRecords(records, [])
  assert.equal(records.lifetimeCelestialBodyCount, 1)
  records = recordCelestialBodyCreated(records, 'Ramen')
  assert.equal(records.lifetimeCelestialBodyCount, 2)
})

test('chooses the highest stage when multiple current stars share a genre', () => {
  const records = createInitialAchievementRecords([
    { genre: '寿司', calories: 2600, foods: [] },
    { genre: '寿司', calories: 5000, foods: [] },
    { genre: 'カレー', calories: 700, foods: [] },
  ])

  assert.deepEqual(records.highestEvolutionStages, {
    寿司: '褐色矮星',
    カレー: '小惑星',
  })
})

test('migrates version 2 records while excluding legacy meals from genre totals', () => {
  const storage = createStorage()
  const food = {
    ...makeFood('old-food', 500, '2025-08-01T03:00:00.000Z'),
    name: '旧食事',
    storeName: '旧店舗',
  }
  const legacyRecords = {
    ...createInitialAchievementRecords(),
    version: 2,
    lifetimeRegistrationCount: 1,
    lifetimeCalories: 500,
    registrationDates: ['2025-08-01'],
    createdGenres: ['寿司', 'カレー'],
    highestEvolutionStage: '小惑星',
    highestEvolutionStages: { 寿司: '小惑星' },
    processedFoodEntries: {
      [food.id]: { calories: food.calories, registeredAt: food.registeredAt },
    },
  }
  delete legacyRecords.lifetimeCaloriesByGenre
  delete legacyRecords.lifetimeCelestialBodyCount
  storage.values.set(ACHIEVEMENT_STORAGE_KEY, JSON.stringify(legacyRecords))

  const loaded = loadAchievementRecords(storage, [{
    genre: '寿司',
    calories: 500,
    foods: [food],
  }])
  const saved = JSON.parse(storage.getItem(ACHIEVEMENT_STORAGE_KEY))

  assert.equal(loaded.records.version, ACHIEVEMENT_DATA_VERSION)
  assert.equal(loaded.records.lifetimeRegistrationCount, 1)
  assert.equal(loaded.records.lifetimeCalories, 500)
  assert.deepEqual(loaded.records.lifetimeCaloriesByGenre, {})
  assert.equal(loaded.records.lifetimeCelestialBodyCount, 2)
  assert.deepEqual(loaded.records.processedFoodEntries[food.id], {
    id: food.id,
    calories: 500,
    registeredAt: food.registeredAt,
    name: '旧食事',
    storeName: '旧店舗',
    genre: '寿司',
    genreStatsEligible: false,
  })
  assert.equal(saved.version, ACHIEVEMENT_DATA_VERSION)
})

test('migrates version 1 records without assigning the global stage to an unknown genre', () => {
  const storage = createStorage()
  const legacyRecords = {
    ...createInitialAchievementRecords(),
    version: 1,
    createdGenres: ['寿司'],
    highestEvolutionStage: '赤色矮星',
  }
  delete legacyRecords.highestEvolutionStages
  storage.values.set(ACHIEVEMENT_STORAGE_KEY, JSON.stringify(legacyRecords))

  const loaded = loadAchievementRecords(storage, [])
  const saved = JSON.parse(storage.getItem(ACHIEVEMENT_STORAGE_KEY))

  assert.equal(loaded.records.version, ACHIEVEMENT_DATA_VERSION)
  assert.equal(loaded.records.highestEvolutionStage, '赤色矮星')
  assert.deepEqual(loaded.records.highestEvolutionStages, {})
  assert.equal(saved.version, ACHIEVEMENT_DATA_VERSION)
  assert.deepEqual(saved.highestEvolutionStages, {})

  const activeStorage = createStorage()
  activeStorage.values.set(ACHIEVEMENT_STORAGE_KEY, JSON.stringify(legacyRecords))
  const activeLoaded = loadAchievementRecords(activeStorage, [
    { genre: 'カレー', calories: 2000, foods: [] },
  ])
  assert.equal(activeLoaded.records.highestEvolutionStage, '赤色矮星')
  assert.deepEqual(activeLoaded.records.highestEvolutionStages, { カレー: '地球型惑星' })
})

test('does not overwrite a future achievement data version', () => {
  const storage = createStorage()
  const futureData = JSON.stringify({ version: ACHIEVEMENT_DATA_VERSION + 1, preserved: true })
  storage.values.set(ACHIEVEMENT_STORAGE_KEY, futureData)
  const originalWarn = console.warn
  console.warn = () => {}

  try {
    const loaded = loadAchievementRecords(storage, [])
    assert.equal(loaded.canPersist, false)
    assert.equal(storage.getItem(ACHIEVEMENT_STORAGE_KEY), futureData)
  } finally {
    console.warn = originalWarn
  }
})

test('keeps achievement storage read failures isolated from legacy star data', () => {
  const originalWarn = console.warn
  console.warn = () => {}

  try {
    const loaded = loadAchievementRecords(
      { getItem: () => { throw new Error('storage unavailable') }, setItem: () => {} },
      [{ genre: 'legacy', calories: 200, foods: [makeFood('food-1', 200, '2025-06-01T03:00:00.000Z')] }],
    )
    assert.equal(loaded.canPersist, false)
    assert.equal(loaded.records.lifetimeRegistrationCount, 1)
    assert.equal(loaded.records.lifetimeCalories, 200)
  } finally {
    console.warn = originalWarn
  }
})
