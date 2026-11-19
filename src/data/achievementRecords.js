import { Constants } from '../utils/constants.js'
import { getJapanDateKey } from './japanDate.js'
import { getStatisticsDateRange } from './statisticsDateRange.js'

export const ACHIEVEMENT_STORAGE_KEY = 'spaceDebrisAchievementData'
export const ACHIEVEMENT_DATA_VERSION = 3

export { getJapanDateKey } from './japanDate.js'

const toNonNegativeNumber = (value, label) => {
  const number = Number(value)
  if (!Number.isFinite(number) || number < 0) {
    throw new TypeError(`${label} must be a non-negative finite number`)
  }
  return number
}

const getFoodEntries = (stars) => stars.flatMap((star) =>
  Array.isArray(star?.foods) ? star.foods.filter((food) => food && typeof food === 'object') : []
)

const getLegacyFoodCalories = (food) => {
  const calories = Number(food?.calories)
  return Number.isFinite(calories) && calories >= 0 ? calories : 0
}

const createFoodHistoryEntry = (food, id, genre, genreStatsEligible) => ({
  id,
  calories: getLegacyFoodCalories(food),
  registeredAt: typeof food?.registeredAt === 'string' ? food.registeredAt : null,
  name: typeof food?.name === 'string' ? food.name : null,
  storeName: typeof food?.storeName === 'string' ? food.storeName : null,
  genre: typeof genre === 'string' && genre.trim() ? genre.trim() : null,
  genreStatsEligible,
})

const addRegistrationDate = (dates, registeredAt) => {
  const date = getJapanDateKey(registeredAt)
  if (!date || dates.includes(date)) return dates
  return [...dates, date].sort()
}

const getStageForCalories = (calories) => {
  for (const stage of Constants.EVOLUTION_STAGES) {
    if (calories <= stage.threshold) return stage.stage
  }
  return Constants.EVOLUTION_STAGES[Constants.EVOLUTION_STAGES.length - 1].stage
}

const getStageIndex = (stageName) => Constants.EVOLUTION_STAGES.findIndex((stage) => stage.stage === stageName)

const addCreatedGenre = (genres, genre) => {
  if (typeof genre !== 'string' || !genre.trim()) return genres
  const normalizedGenre = genre.trim()
  const exists = genres.some((item) => item.toLowerCase() === normalizedGenre.toLowerCase())
  return exists ? genres : [...genres, normalizedGenre]
}

const getCanonicalGenre = (genres, genre) => {
  if (typeof genre !== 'string' || !genre.trim()) return null
  const normalizedGenre = genre.trim()
  return genres.find((item) => item.toLowerCase() === normalizedGenre.toLowerCase()) || normalizedGenre
}

export function createInitialAchievementRecords(stars = []) {
  const safeStars = Array.isArray(stars) ? stars : []
  const foods = getFoodEntries(safeStars)
  const processedFoodEntries = {}
  let registrationDates = []

  safeStars.forEach((star) => {
    const starFoods = Array.isArray(star?.foods) ? star.foods : []
    starFoods.forEach((food) => {
      if (typeof food?.id === 'string' && food.id) {
        processedFoodEntries[food.id] = createFoodHistoryEntry(
          food,
          food.id,
          star?.genre,
          false,
        )
      }
      registrationDates = addRegistrationDate(registrationDates, food?.registeredAt)
    })
  })

  const createdGenres = safeStars.reduce(
    (genres, star) => addCreatedGenre(genres, star?.genre),
    []
  )
  const highestEvolutionStage = safeStars.reduce((highest, star) => {
    const calories = Number(star?.calories)
    if (!Number.isFinite(calories) || calories < 0) return highest
    const currentStage = getStageForCalories(calories)
    return getStageIndex(currentStage) > getStageIndex(highest) ? currentStage : highest
  }, null)
  const stagesByGenre = new Map()
  safeStars.forEach((star) => {
    const genre = getCanonicalGenre(createdGenres, star?.genre)
    const calories = Number(star?.calories)
    if (!genre || !Number.isFinite(calories) || calories < 0) return

    const stage = getStageForCalories(calories)
    const previousStage = stagesByGenre.get(genre)
    if (getStageIndex(stage) > getStageIndex(previousStage)) {
      stagesByGenre.set(genre, stage)
    }
  })
  const lifetimeCalories = safeStars.reduce((total, star) => {
    const calories = Number(star?.calories)
    if (Number.isFinite(calories) && calories >= 0) return total + calories

    const starFoods = Array.isArray(star?.foods) ? star.foods : []
    return total + starFoods.reduce((foodTotal, food) => foodTotal + (Number(food?.calories) || 0), 0)
  }, 0)

  return {
    version: ACHIEVEMENT_DATA_VERSION,
    lifetimeRegistrationCount: foods.length,
    lifetimeCalories,
    lifetimeCaloriesByGenre: {},
    lifetimeCelestialBodyCount: safeStars.length,
    registrationDates,
    createdGenres,
    highestEvolutionStage,
    highestEvolutionStages: Object.fromEntries(stagesByGenre),
    unlockedAchievements: {},
    processedFoodEntries,
  }
}

export function normalizeAchievementRecords(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new TypeError('Achievement data must be an object')
  }
  if (value.version === 1) {
    value = {
      ...value,
      version: 2,
      highestEvolutionStages: value.highestEvolutionStages ?? {},
    }
  }
  if (value.version === 2) {
    value = {
      ...value,
      version: ACHIEVEMENT_DATA_VERSION,
      lifetimeCaloriesByGenre: {},
      lifetimeCelestialBodyCount: 0,
    }
  }
  if (value.version !== ACHIEVEMENT_DATA_VERSION) {
    throw new RangeError(`Unsupported achievement data version: ${value.version}`)
  }

  if (!Array.isArray(value.registrationDates) ||
      !Array.isArray(value.createdGenres) ||
      !value.lifetimeCaloriesByGenre ||
      typeof value.lifetimeCaloriesByGenre !== 'object' ||
      Array.isArray(value.lifetimeCaloriesByGenre) ||
      !value.unlockedAchievements ||
      typeof value.unlockedAchievements !== 'object' ||
      Array.isArray(value.unlockedAchievements) ||
      !value.highestEvolutionStages ||
      typeof value.highestEvolutionStages !== 'object' ||
      Array.isArray(value.highestEvolutionStages) ||
      !value.processedFoodEntries ||
      typeof value.processedFoodEntries !== 'object' ||
      Array.isArray(value.processedFoodEntries)) {
    throw new TypeError('Achievement data has an invalid shape')
  }

  const highestEvolutionStage = value.highestEvolutionStage == null ? null : value.highestEvolutionStage
  if (highestEvolutionStage !== null && getStageIndex(highestEvolutionStage) < 0) {
    throw new TypeError('Achievement data contains an unknown evolution stage')
  }

  const highestEvolutionStages = {}
  Object.entries(value.highestEvolutionStages).forEach(([genre, stage]) => {
    if (!genre.trim() || getStageIndex(stage) < 0) {
      throw new TypeError('Achievement data contains an invalid genre evolution stage')
    }
    Object.defineProperty(highestEvolutionStages, genre, {
      value: stage,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  })

  const lifetimeCaloriesByGenre = {}
  Object.entries(value.lifetimeCaloriesByGenre).forEach(([genre, calories]) => {
    if (!genre.trim()) {
      throw new TypeError('Achievement data contains an invalid genre calorie total')
    }
    Object.defineProperty(lifetimeCaloriesByGenre, genre, {
      value: toNonNegativeNumber(calories, 'genre lifetime calories'),
      enumerable: true,
      configurable: true,
      writable: true,
    })
  })

  const processedFoodEntries = {}
  Object.entries(value.processedFoodEntries).forEach(([id, entry]) => {
    if (!id || !entry || typeof entry !== 'object') {
      throw new TypeError('Achievement data contains an invalid processed food entry')
    }
    processedFoodEntries[id] = {
      id: typeof entry.id === 'string' && entry.id ? entry.id : id,
      calories: toNonNegativeNumber(entry.calories, 'processed food calories'),
      registeredAt: typeof entry.registeredAt === 'string' ? entry.registeredAt : null,
      name: typeof entry.name === 'string' ? entry.name : null,
      storeName: typeof entry.storeName === 'string' ? entry.storeName : null,
      genre: typeof entry.genre === 'string' && entry.genre.trim() ? entry.genre.trim() : null,
      genreStatsEligible: entry.genreStatsEligible === true,
    }
  })

  const unlockedAchievements = {}
  Object.entries(value.unlockedAchievements).forEach(([id, unlockedAt]) => {
    if (!id || typeof unlockedAt !== 'string' || Number.isNaN(Date.parse(unlockedAt))) {
      throw new TypeError('Achievement data contains an invalid unlocked achievement')
    }
    unlockedAchievements[id] = unlockedAt
  })

  const registrationDates = [...new Set(value.registrationDates)]
  if (registrationDates.some((date) => typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date))) {
    throw new TypeError('Achievement data contains an invalid registration date')
  }

  const createdGenres = [...new Set(value.createdGenres)]
  if (createdGenres.some((genre) => typeof genre !== 'string' || !genre.trim())) {
    throw new TypeError('Achievement data contains an invalid created genre')
  }

  return {
    version: ACHIEVEMENT_DATA_VERSION,
    lifetimeRegistrationCount: toNonNegativeNumber(value.lifetimeRegistrationCount, 'lifetime registration count'),
    lifetimeCalories: toNonNegativeNumber(value.lifetimeCalories, 'lifetime calories'),
    lifetimeCaloriesByGenre,
    lifetimeCelestialBodyCount: toNonNegativeNumber(
      value.lifetimeCelestialBodyCount,
      'lifetime celestial body count',
    ),
    registrationDates: registrationDates.sort(),
    createdGenres,
    highestEvolutionStage,
    highestEvolutionStages,
    unlockedAchievements,
    processedFoodEntries,
  }
}

const updateGenreLifetimeCalories = (records, genre, delta) => {
  if (delta === 0 || typeof genre !== 'string' || !genre.trim()) {
    return records.lifetimeCaloriesByGenre
  }

  const canonicalGenre = getCanonicalGenre(records.createdGenres, genre)
  if (!canonicalGenre) return records.lifetimeCaloriesByGenre

  const existingKey = Object.keys(records.lifetimeCaloriesByGenre).find(
    (key) => key.toLowerCase() === canonicalGenre.toLowerCase()
  )
  const key = existingKey || canonicalGenre
  const currentCalories = records.lifetimeCaloriesByGenre[key] || 0
  const nextCalories = Math.max(0, currentCalories + delta)
  const updatedTotals = new Map(Object.entries(records.lifetimeCaloriesByGenre))

  if (nextCalories === 0) updatedTotals.delete(key)
  else updatedTotals.set(key, nextCalories)

  return Object.fromEntries(updatedTotals)
}

export function recordFoodRegistration(records, foodEntry, genre = foodEntry?.genre) {
  if (!foodEntry || typeof foodEntry.id !== 'string' || !foodEntry.id) {
    throw new TypeError('A food entry ID is required to record a registration')
  }

  const calories = toNonNegativeNumber(foodEntry.calories, 'food calories')
  const registeredAt = typeof foodEntry.registeredAt === 'string' ? foodEntry.registeredAt : ''
  const registeredDate = getJapanDateKey(registeredAt)
  if (!registeredDate) throw new TypeError('A valid registration timestamp is required')

  const previousEntry = records.processedFoodEntries[foodEntry.id]
  const effectiveGenre = genre || previousEntry?.genre || null
  const genreStatsEligible = previousEntry
    ? previousEntry.genreStatsEligible === true
    : typeof effectiveGenre === 'string' && Boolean(effectiveGenre.trim())
  const delta = previousEntry ? calories - previousEntry.calories : calories
  const recordsWithGenre = recordCreatedGenre(records, effectiveGenre)
  const entryForHistory = {
    ...foodEntry,
    registeredAt: previousEntry?.registeredAt || registeredAt,
  }
  const processedFoodEntry = createFoodHistoryEntry(
    entryForHistory,
    foodEntry.id,
    effectiveGenre,
    genreStatsEligible,
  )
  const processedFoodEntries = {
    ...recordsWithGenre.processedFoodEntries,
    [foodEntry.id]: processedFoodEntry,
  }
  const lifetimeCaloriesByGenre = genreStatsEligible
    ? updateGenreLifetimeCalories(recordsWithGenre, effectiveGenre, delta)
    : recordsWithGenre.lifetimeCaloriesByGenre

  return {
    ...recordsWithGenre,
    lifetimeRegistrationCount: previousEntry
      ? records.lifetimeRegistrationCount
      : records.lifetimeRegistrationCount + 1,
    lifetimeCalories: Math.max(0, records.lifetimeCalories + delta),
    lifetimeCaloriesByGenre,
    registrationDates: addRegistrationDate(records.registrationDates, registeredAt),
    processedFoodEntries,
  }
}

export function recordFoodEdit(records, foodId, previousCalories, nextCalories, foodDetails = {}) {
  if (typeof foodId !== 'string' || !foodId) throw new TypeError('A food entry ID is required to record an edit')
  const previous = toNonNegativeNumber(previousCalories, 'previous food calories')
  const next = toNonNegativeNumber(nextCalories, 'next food calories')
  const storedEntry = records.processedFoodEntries[foodId]
  const countedCalories = storedEntry ? storedEntry.calories : previous
  const genre = foodDetails.genre || storedEntry?.genre || null
  const recordsWithGenre = recordCreatedGenre(records, genre)
  const genreStatsEligible = storedEntry?.genreStatsEligible === true ||
    foodDetails.genreStatsEligible === true
  const delta = next - countedCalories
  const entryForHistory = {
    ...storedEntry,
    ...foodDetails,
    registeredAt: storedEntry?.registeredAt || foodDetails.registeredAt || null,
    calories: next,
  }
  const processedFoodEntry = createFoodHistoryEntry(
    entryForHistory,
    foodId,
    genre,
    genreStatsEligible,
  )

  return {
    ...recordsWithGenre,
    lifetimeCalories: Math.max(0, records.lifetimeCalories + delta),
    lifetimeCaloriesByGenre: genreStatsEligible
      ? updateGenreLifetimeCalories(recordsWithGenre, genre, delta)
      : recordsWithGenre.lifetimeCaloriesByGenre,
    processedFoodEntries: {
      ...recordsWithGenre.processedFoodEntries,
      [foodId]: processedFoodEntry,
    },
  }
}

export function recordCelestialBodyCreated(records, genre) {
  const withGenre = recordCreatedGenre(records, genre)
  return {
    ...withGenre,
    lifetimeCelestialBodyCount: records.lifetimeCelestialBodyCount + 1,
  }
}

export function recordCreatedGenre(records, genre) {
  const createdGenres = addCreatedGenre(records.createdGenres, genre)
  if (createdGenres === records.createdGenres) return records
  return { ...records, createdGenres }
}

export function recordHighestEvolutionStage(records, stageName) {
  const currentIndex = getStageIndex(records.highestEvolutionStage)
  const nextIndex = getStageIndex(stageName)
  if (nextIndex < 0 || nextIndex <= currentIndex) return records
  return { ...records, highestEvolutionStage: stageName }
}

export function recordGenreEvolutionStage(records, genre, stageName) {
  const nextIndex = getStageIndex(stageName)
  if (nextIndex < 0) return records

  const withGenre = recordCreatedGenre(records, genre)
  const genreKey = getCanonicalGenre(withGenre.createdGenres, genre)
  const globalRecords = recordHighestEvolutionStage(withGenre, stageName)
  if (!genreKey) return globalRecords

  const existingKey = Object.keys(globalRecords.highestEvolutionStages).find(
    (key) => key.toLowerCase() === genreKey.toLowerCase()
  )
  const key = existingKey || genreKey
  const currentStage = globalRecords.highestEvolutionStages[key]
  if (nextIndex <= getStageIndex(currentStage)) return globalRecords

  return {
    ...globalRecords,
    highestEvolutionStages: Object.fromEntries([
      ...Object.entries(globalRecords.highestEvolutionStages).filter(([existing]) => existing !== key),
      [key, stageName],
    ]),
  }
}

export function recordAchievementUnlock(records, achievementId, unlockedAt = new Date().toISOString()) {
  if (typeof achievementId !== 'string' || !achievementId) {
    throw new TypeError('An achievement ID is required')
  }
  if (records.unlockedAchievements[achievementId]) return records
  if (typeof unlockedAt !== 'string' || Number.isNaN(Date.parse(unlockedAt))) {
    throw new TypeError('A valid achievement timestamp is required')
  }
  return {
    ...records,
    unlockedAchievements: {
      ...records.unlockedAchievements,
      [achievementId]: unlockedAt,
    },
  }
}

export function reconcileAchievementRecords(records, stars = [], now = new Date()) {
  let reconciled = records
  const safeStars = Array.isArray(stars) ? stars : []
  const { startDateKey, endDateKey } = getStatisticsDateRange('1y', now)

  safeStars.forEach((star) => {
    reconciled = recordCreatedGenre(reconciled, star?.genre)
    const calories = Number(star?.calories)
    if (Number.isFinite(calories) && calories >= 0) {
      reconciled = recordGenreEvolutionStage(reconciled, star?.genre, getStageForCalories(calories))
    }

    const foods = Array.isArray(star?.foods) ? star.foods : []
    foods.forEach((food) => {
      if (!food || typeof food.id !== 'string' || !food.id) return
      const calories = Number(food.calories)
      if (!Number.isFinite(calories) || calories < 0) {
        console.warn('実績記録を照合できない食事カロリーをスキップしました。')
        return
      }
      const previousEntry = reconciled.processedFoodEntries[food.id]
      if (!previousEntry) {
        const registeredDate = getJapanDateKey(food.registeredAt)
        if (!registeredDate || registeredDate < startDateKey || registeredDate > endDateKey) return
        reconciled = recordFoodRegistration(reconciled, food, star?.genre)
      } else {
        reconciled = recordFoodEdit(
          reconciled,
          food.id,
          previousEntry.calories,
          calories,
          { ...food, genre: star?.genre },
        )
        const registeredAt = previousEntry.registeredAt || food.registeredAt
        const registrationDates = addRegistrationDate(reconciled.registrationDates, registeredAt)
        if (registrationDates !== reconciled.registrationDates) {
          reconciled = { ...reconciled, registrationDates }
        }
      }
    })
  })

  return reconciled
}

export function pruneExpiredFoodHistory(records, now = new Date()) {
  const { startDateKey, endDateKey } = getStatisticsDateRange('1y', now)
  const processedFoodEntries = Object.fromEntries(
    Object.entries(records.processedFoodEntries).filter(([, entry]) => {
      const registeredDate = getJapanDateKey(entry.registeredAt)
      return registeredDate && registeredDate >= startDateKey && registeredDate <= endDateKey
    }),
  )

  if (Object.keys(processedFoodEntries).length === Object.keys(records.processedFoodEntries).length) {
    return records
  }
  return { ...records, processedFoodEntries }
}

const preserveGenreStatsEligibility = (records, stars) => {
  const safeStars = Array.isArray(stars) ? stars : []
  safeStars.forEach((star) => {
    const foods = Array.isArray(star?.foods) ? star.foods : []
    foods.forEach((food) => {
      const storedEntry = records.processedFoodEntries[food?.id]
      if (storedEntry) food.genreStatsEligible = storedEntry.genreStatsEligible === true
    })
  })
}

const migrateCurrentFoodHistory = (records, stars) => {
  const processedFoodEntries = { ...records.processedFoodEntries }
  const safeStars = Array.isArray(stars) ? stars : []

  safeStars.forEach((star) => {
    const foods = Array.isArray(star?.foods) ? star.foods : []
    foods.forEach((food) => {
      if (!food || typeof food.id !== 'string' || !food.id) return
      const previousEntry = processedFoodEntries[food.id]
      const entryForHistory = {
        ...food,
        calories: previousEntry ? previousEntry.calories : getLegacyFoodCalories(food),
        registeredAt: previousEntry?.registeredAt || food.registeredAt,
      }
      processedFoodEntries[food.id] = createFoodHistoryEntry(
        entryForHistory,
        food.id,
        star?.genre,
        false,
      )
    })
  })

  return { ...records, processedFoodEntries }
}

export function saveAchievementRecords(storage, records, now = new Date()) {
  try {
    storage.setItem(
      ACHIEVEMENT_STORAGE_KEY,
      JSON.stringify(pruneExpiredFoodHistory(records, now)),
    )
    return true
  } catch (error) {
    console.warn('実績データの保存に失敗しました。', error)
    return false
  }
}

export function loadAchievementRecords(storage, currentStars = [], now = new Date()) {
  const fallbackRecords = createInitialAchievementRecords(currentStars)
  let rawData

  try {
    rawData = storage.getItem(ACHIEVEMENT_STORAGE_KEY)
  } catch (error) {
    console.warn('実績データを読み込めませんでした。既存の星データから初期化します。', error)
    return { records: fallbackRecords, canPersist: false }
  }

  if (rawData === null) {
    const reconciledRecords = reconcileAchievementRecords(fallbackRecords, currentStars, now)
    preserveGenreStatsEligibility(reconciledRecords, currentStars)
    const records = pruneExpiredFoodHistory(reconciledRecords, now)
    saveAchievementRecords(storage, records, now)
    return { records, canPersist: true }
  }

  let parsedData
  try {
    parsedData = JSON.parse(rawData)
  } catch (error) {
    console.warn('実績データを解析できませんでした。既存の星データから初期化します。', error)
    preserveGenreStatsEligibility(fallbackRecords, currentStars)
    const records = pruneExpiredFoodHistory(fallbackRecords, now)
    saveAchievementRecords(storage, records, now)
    return { records, canPersist: true }
  }

  if (parsedData?.version > ACHIEVEMENT_DATA_VERSION) {
    console.warn('この実績データは新しい形式です。上書きせず、今回の変更はメモリ内に保持します。')
    return { records: pruneExpiredFoodHistory(fallbackRecords, now), canPersist: false }
  }

  let records
  try {
    records = normalizeAchievementRecords(parsedData)
  } catch (error) {
    console.warn('実績データの形式が不正です。既存の星データから初期化します。', error)
    preserveGenreStatsEligibility(fallbackRecords, currentStars)
    const records = pruneExpiredFoodHistory(fallbackRecords, now)
    saveAchievementRecords(storage, records, now)
    return { records, canPersist: true }
  }

  if (parsedData.version < ACHIEVEMENT_DATA_VERSION) {
    const safeStars = Array.isArray(currentStars) ? currentStars : []
    records = {
      ...records,
      lifetimeCaloriesByGenre: {},
      lifetimeCelestialBodyCount: Math.max(
        records.lifetimeCelestialBodyCount,
        safeStars.length,
        records.createdGenres.length,
      ),
    }
    records = migrateCurrentFoodHistory(records, safeStars)
  }

  const reconciledRecords = reconcileAchievementRecords(records, currentStars, now)
  preserveGenreStatsEligibility(reconciledRecords, currentStars)
  const retainedRecords = pruneExpiredFoodHistory(reconciledRecords, now)
  if (parsedData.version !== ACHIEVEMENT_DATA_VERSION ||
      JSON.stringify(retainedRecords) !== JSON.stringify(records)) {
    saveAchievementRecords(storage, retainedRecords, now)
  }
  return { records: retainedRecords, canPersist: true }
}
