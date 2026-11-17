import { getJapanDateKey } from './achievementRecords.js'

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000
const DAYS_BY_PERIOD = {
  '7d': 7,
  '30d': 30,
}

const parseDateKey = (dateKey) => new Date(`${dateKey}T00:00:00.000Z`)

const getOneYearAgo = (endDate) => {
  const year = endDate.getUTCFullYear() - 1
  const month = endDate.getUTCMonth()
  const day = endDate.getUTCDate()
  const startDate = new Date(Date.UTC(year, month, day))
  if (startDate.getUTCMonth() !== month) startDate.setUTCDate(0)
  return startDate
}

export function createDailyCalorieSeries(foodHistory, period, now = new Date()) {
  if (period !== '7d' && period !== '30d' && period !== '1y') {
    throw new TypeError(`Unsupported calorie trend period: ${period}`)
  }

  const endDateKey = getJapanDateKey(now)
  if (!endDateKey) throw new TypeError('A valid current date is required')

  const endDate = parseDateKey(endDateKey)
  const startDate = period === '1y'
    ? getOneYearAgo(endDate)
    : new Date(endDate.getTime() - (DAYS_BY_PERIOD[period] - 1) * DAY_IN_MILLISECONDS)
  const startDateKey = startDate.toISOString().slice(0, 10)
  const totalsByDate = new Map()
  const entries = Array.isArray(foodHistory)
    ? foodHistory
    : foodHistory && typeof foodHistory === 'object'
      ? Object.values(foodHistory)
      : []

  entries.forEach((entry) => {
    if (!entry || typeof entry !== 'object' || entry.calories == null) return
    const dateKey = getJapanDateKey(entry.registeredAt)
    const calories = Number(entry.calories)
    if (!dateKey || dateKey < startDateKey || dateKey > endDateKey ||
        !Number.isFinite(calories) || calories < 0) {
      return
    }
    totalsByDate.set(dateKey, (totalsByDate.get(dateKey) || 0) + calories)
  })

  const series = []
  for (let timestamp = startDate.getTime(); timestamp <= endDate.getTime(); timestamp += DAY_IN_MILLISECONDS) {
    const dateKey = new Date(timestamp).toISOString().slice(0, 10)
    series.push({ date: dateKey, calories: totalsByDate.get(dateKey) || 0 })
  }
  return series
}
