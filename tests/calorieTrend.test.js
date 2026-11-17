import assert from 'node:assert/strict'
import test from 'node:test'
import { createDailyCalorieSeries } from '../src/data/calorieTrend.js'

test('aggregates daily calories by JST date and fills empty days with zero', () => {
  const series = createDailyCalorieSeries({
    first: { calories: 100, registeredAt: '2026-11-10T15:00:00.000Z' },
    sameDay: { calories: 50, registeredAt: '2026-11-11T14:59:59.000Z' },
    nextDay: { calories: 25, registeredAt: '2026-11-11T15:00:00.000Z' },
    outsidePeriod: { calories: 500, registeredAt: '2026-11-10T14:59:59.000Z' },
  }, '7d', '2026-11-17T00:30:00+09:00')

  assert.equal(series.length, 7)
  assert.deepEqual(series.slice(0, 3), [
    { date: '2026-11-11', calories: 150 },
    { date: '2026-11-12', calories: 25 },
    { date: '2026-11-13', calories: 0 },
  ])
  assert.deepEqual(series.at(-1), { date: '2026-11-17', calories: 0 })
})

test('builds the selected 30-day and calendar-year ranges in order', () => {
  const now = '2026-11-17T00:30:00+09:00'
  const thirtyDays = createDailyCalorieSeries([], '30d', now)
  const oneYear = createDailyCalorieSeries([], '1y', now)

  assert.equal(thirtyDays.length, 30)
  assert.equal(thirtyDays[0].date, '2026-10-19')
  assert.equal(thirtyDays.at(-1).date, '2026-11-17')
  assert.equal(oneYear.length, 366)
  assert.equal(oneYear[0].date, '2025-11-17')
  assert.equal(oneYear.at(-1).date, '2026-11-17')
  assert.ok(oneYear.every((day) => day.calories === 0))
})

test('includes the one-year boundary and ignores records outside it', () => {
  const series = createDailyCalorieSeries([
    { calories: 300, registeredAt: '2025-11-16T15:00:00.000Z' },
    { calories: 900, registeredAt: '2025-11-16T14:59:59.000Z' },
  ], '1y', '2026-11-17T00:30:00+09:00')

  assert.deepEqual(series[0], { date: '2025-11-17', calories: 300 })
  assert.equal(series.some((day) => day.calories === 900), false)
})

test('rejects unsupported periods and invalid current dates', () => {
  assert.throws(() => createDailyCalorieSeries([], '90d'), TypeError)
  assert.throws(() => createDailyCalorieSeries([], '7d', 'invalid'), TypeError)
})
