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

export function getStatisticsDateRange(period, now = new Date()) {
  if (period !== '7d' && period !== '30d' && period !== '1y') {
    throw new TypeError(`Unsupported statistics period: ${period}`)
  }

  const endDateKey = getJapanDateKey(now)
  if (!endDateKey) throw new TypeError('A valid current date is required')

  const endDate = parseDateKey(endDateKey)
  const startDate = period === '1y'
    ? getOneYearAgo(endDate)
    : new Date(endDate.getTime() - (DAYS_BY_PERIOD[period] - 1) * DAY_IN_MILLISECONDS)

  return {
    startDateKey: startDate.toISOString().slice(0, 10),
    endDateKey,
  }
}
