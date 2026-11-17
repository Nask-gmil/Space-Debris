import { getJapanDateKey } from './achievementRecords.js'
import { getStatisticsDateRange } from './statisticsDateRange.js'

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000

export function createDailyCalorieSeries(foodHistory, period, now = new Date()) {
  const { startDateKey, endDateKey } = getStatisticsDateRange(period, now)
  const startDate = new Date(`${startDateKey}T00:00:00.000Z`)
  const endDate = new Date(`${endDateKey}T00:00:00.000Z`)
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
