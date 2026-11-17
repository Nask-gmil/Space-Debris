import { getJapanDateKey } from './achievementRecords.js'
import { getStatisticsDateRange } from './statisticsDateRange.js'

const isValidMonthKey = (monthKey) => typeof monthKey === 'string' &&
  /^\d{4}-(0[1-9]|1[0-2])$/.test(monthKey)

const getFoodEntries = (foodHistory) => Array.isArray(foodHistory)
  ? foodHistory
  : foodHistory && typeof foodHistory === 'object'
    ? Object.values(foodHistory)
    : []

export function shiftCalendarMonth(monthKey, offset) {
  if (!isValidMonthKey(monthKey) || !Number.isInteger(offset)) {
    throw new TypeError('A valid calendar month and integer offset are required')
  }
  const [year, month] = monthKey.split('-').map(Number)
  const shifted = new Date(Date.UTC(year, month - 1 + offset, 1))
  return `${shifted.getUTCFullYear()}-${String(shifted.getUTCMonth() + 1).padStart(2, '0')}`
}

export function createMealCalendarMonth(foodHistory, monthKey, now = new Date()) {
  if (!isValidMonthKey(monthKey)) throw new TypeError('A valid calendar month is required')

  const { startDateKey, endDateKey } = getStatisticsDateRange('1y', now)
  const mealsByDate = new Map()
  getFoodEntries(foodHistory).forEach((entry) => {
    if (!entry || typeof entry !== 'object' || entry.calories == null) return
    const dateKey = getJapanDateKey(entry.registeredAt)
    const calories = Number(entry.calories)
    if (!dateKey || dateKey < startDateKey || dateKey > endDateKey ||
        !Number.isFinite(calories) || calories < 0) {
      return
    }

    const meals = mealsByDate.get(dateKey) || []
    meals.push({
      id: typeof entry.id === 'string' ? entry.id : '',
      name: typeof entry.name === 'string' ? entry.name : '',
      calories,
      storeName: typeof entry.storeName === 'string' ? entry.storeName : '',
      registeredAt: typeof entry.registeredAt === 'string' ? entry.registeredAt : null,
    })
    mealsByDate.set(dateKey, meals)
  })

  mealsByDate.forEach((meals) => {
    meals.sort((first, second) => Date.parse(first.registeredAt) - Date.parse(second.registeredAt))
  })

  const [year, month] = monthKey.split('-').map(Number)
  const firstDate = new Date(Date.UTC(year, month - 1, 1))
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate()
  const firstWeekdayMonday = (firstDate.getUTCDay() + 6) % 7
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1
    const date = `${monthKey}-${String(day).padStart(2, '0')}`
    const meals = mealsByDate.get(date) || []
    return {
      date,
      day,
      isAvailable: date >= startDateKey && date <= endDateKey,
      isToday: date === endDateKey,
      hasMeals: meals.length > 0,
      totalCalories: meals.reduce((total, meal) => total + meal.calories, 0),
      meals,
    }
  })

  return {
    monthKey,
    startDateKey,
    endDateKey,
    firstWeekdayMonday,
    days,
  }
}
