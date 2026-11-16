import { Constants } from '../utils/constants.js'

export const ACHIEVEMENT_STORAGE_KEY = 'spaceDebrisAchievementData'
export const ACHIEVEMENT_DATA_VERSION = 2

const TOKYO_TIME_ZONE = 'Asia/Tokyo'
const datePartsFormatter = new Intl.DateTimeFormat('en', {
  timeZone: TOKYO_TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

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

export function getJapanDateKey(value) {
  if (value == null || value === '') return null
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return null

  const parts = Object.fromEntries(
    datePartsFormatter.formatToParts(date).map(({ type, value: partValue }) => [type, partValue])
  )
  return `${parts.year}-${parts.month}-${parts.day}`
}

export function createInitialAchievementRecords(stars = []) {
  const safeStars = Array.isArray(stars) ? stars : []
  const foods = getFoodEntries(safeStars)
  const processedFoodEntries = {}
  let registrationDates = []

  foods.forEach((food) => {
    if (typeof food.id === 'string' && food.id) {
      processedFoodEntries[food.id] = {
        calories: getLegacyFoodCalories(food),
        registeredAt: typeof food.registeredAt === 'string' ? food.registeredAt : null,
      }
    }
    registrationDates = addRegistrationDate(registrationDates, food.registeredAt)
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
      version: ACHIEVEMENT_DATA_VERSION,
      highestEvolutionStages: value.highestEvolutionStages ?? {},
    }
  }
  if (value.version !== ACHIEVEMENT_DATA_VERSION) {
    throw new RangeError(`Unsupported achievement data version: ${value.version}`)
  }

  if (!Array.isArray(value.registrationDates) ||
      !Array.isArray(value.createdGenres) ||
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

  const processedFoodEntries = {}
  Object.entries(value.processedFoodEntries).forEach(([id, entry]) => {
    if (!id || !entry || typeof entry !== 'object') {
      throw new TypeError('Achievement data contains an invalid processed food entry')
    }
    processedFoodEntries[id] = {
      calories: toNonNegativeNumber(entry.calories, 'processed food calories'),
      registeredAt: typeof entry.registeredAt === 'string' ? entry.registeredAt : null,
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
    registrationDates: registrationDates.sort(),
    createdGenres,
    highestEvolutionStage,
    highestEvolutionStages,
    unlockedAchievements,
    processedFoodEntries,
  }
}

export function recordFoodRegistration(records, foodEntry) {
  if (!foodEntry || typeof foodEntry.id !== 'string' || !foodEntry.id) {
    throw new TypeError('A food entry ID is required to record a registration')
  }

  const calories = toNonNegativeNumber(foodEntry.calories, 'food calories')
  const registeredAt = typeof foodEntry.registeredAt === 'string' ? foodEntry.registeredAt : ''
  const registeredDate = getJapanDateKey(registeredAt)
  if (!registeredDate) throw new TypeError('A valid registration timestamp is required')

  const previousEntry = records.processedFoodEntries[foodEntry.id]
  const processedFoodEntries = {
    ...records.processedFoodEntries,
    [foodEntry.id]: { calories, registeredAt },
  }

  if (previousEntry) {
    return {
      ...records,
      lifetimeCalories: Math.max(0, records.lifetimeCalories + calories - previousEntry.calories),
      processedFoodEntries,
    }
  }

  return {
    ...records,
    lifetimeRegistrationCount: records.lifetimeRegistrationCount + 1,
    lifetimeCalories: records.lifetimeCalories + calories,
    registrationDates: addRegistrationDate(records.registrationDates, registeredAt),
    processedFoodEntries,
  }
}

export function recordFoodEdit(records, foodId, previousCalories, nextCalories) {
  if (typeof foodId !== 'string' || !foodId) throw new TypeError('A food entry ID is required to record an edit')
  const previous = toNonNegativeNumber(previousCalories, 'previous food calories')
  const next = toNonNegativeNumber(nextCalories, 'next food calories')
  const storedEntry = records.processedFoodEntries[foodId]
  const countedCalories = storedEntry ? storedEntry.calories : previous

  return {
    ...records,
    lifetimeCalories: Math.max(0, records.lifetimeCalories + next - countedCalories),
    processedFoodEntries: {
      ...records.processedFoodEntries,
      [foodId]: {
        calories: next,
        registeredAt: storedEntry?.registeredAt || null,
      },
    },
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

export function reconcileAchievementRecords(records, stars = []) {
  let reconciled = records
  const safeStars = Array.isArray(stars) ? stars : []

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
        reconciled = recordFoodRegistration(reconciled, food)
      } else {
        const registeredAt = previousEntry.registeredAt || food.registeredAt
        const registrationDates = addRegistrationDate(reconciled.registrationDates, registeredAt)
        if (registrationDates !== reconciled.registrationDates) {
          reconciled = { ...reconciled, registrationDates }
        }
        if (calories !== previousEntry.calories) {
          reconciled = recordFoodEdit(reconciled, food.id, previousEntry.calories, calories)
        }
      }
    })
  })

  return reconciled
}

export function saveAchievementRecords(storage, records) {
  try {
    storage.setItem(ACHIEVEMENT_STORAGE_KEY, JSON.stringify(records))
    return true
  } catch (error) {
    console.warn('実績データの保存に失敗しました。', error)
    return false
  }
}

export function loadAchievementRecords(storage, currentStars = []) {
  const fallbackRecords = createInitialAchievementRecords(currentStars)
  let rawData

  try {
    rawData = storage.getItem(ACHIEVEMENT_STORAGE_KEY)
  } catch (error) {
    console.warn('実績データを読み込めませんでした。既存の星データから初期化します。', error)
    return { records: fallbackRecords, canPersist: false }
  }

  if (rawData === null) {
    const records = reconcileAchievementRecords(fallbackRecords, currentStars)
    saveAchievementRecords(storage, records)
    return { records, canPersist: true }
  }

  let parsedData
  try {
    parsedData = JSON.parse(rawData)
  } catch (error) {
    console.warn('実績データを解析できませんでした。既存の星データから初期化します。', error)
    saveAchievementRecords(storage, fallbackRecords)
    return { records: fallbackRecords, canPersist: true }
  }

  if (parsedData?.version > ACHIEVEMENT_DATA_VERSION) {
    console.warn('この実績データは新しい形式です。上書きせず、今回の変更はメモリ内に保持します。')
    return { records: fallbackRecords, canPersist: false }
  }

  let records
  try {
    records = normalizeAchievementRecords(parsedData)
  } catch (error) {
    console.warn('実績データの形式が不正です。既存の星データから初期化します。', error)
    saveAchievementRecords(storage, fallbackRecords)
    return { records: fallbackRecords, canPersist: true }
  }

  const reconciledRecords = reconcileAchievementRecords(records, currentStars)
  if (parsedData.version !== ACHIEVEMENT_DATA_VERSION ||
      JSON.stringify(reconciledRecords) !== JSON.stringify(records)) {
    saveAchievementRecords(storage, reconciledRecords)
  }
  return { records: reconciledRecords, canPersist: true }
}
