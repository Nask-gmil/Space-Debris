import assert from 'node:assert/strict'
import test from 'node:test'
import { createMealCalendarMonth, shiftCalendarMonth } from '../src/data/mealCalendar.js'

test('builds a Monday-first month and groups all meals by JST date', () => {
  const month = createMealCalendarMonth([
    {
      id: 'later',
      name: '夕食',
      calories: 250,
      storeName: '食堂',
      registeredAt: '2026-11-17T03:00:00.000Z',
    },
    {
      id: 'earlier',
      name: '朝食',
      calories: 300,
      registeredAt: '2026-11-16T15:00:00.000Z',
    },
    {
      id: 'previous-jst-day',
      name: '前日の食事',
      calories: 900,
      registeredAt: '2026-11-16T14:59:59.000Z',
    },
    {
      id: 'future',
      name: '未来の記録',
      calories: 800,
      registeredAt: '2026-11-17T15:00:00.000Z',
    },
  ], '2026-11', '2026-11-17T00:30:00+09:00')

  assert.equal(month.firstWeekdayMonday, 6)
  assert.equal(month.days.length, 30)
  const selectedDay = month.days.find((day) => day.date === '2026-11-17')
  assert.equal(selectedDay.isAvailable, true)
  assert.equal(selectedDay.hasMeals, true)
  assert.equal(selectedDay.totalCalories, 550)
  assert.deepEqual(selectedDay.meals.map((meal) => meal.name), ['朝食', '夕食'])
  assert.equal(selectedDay.meals[1].storeName, '食堂')
  const previousDay = month.days.find((day) => day.date === '2026-11-16')
  assert.equal(previousDay.hasMeals, true)
  assert.equal(previousDay.totalCalories, 900)
  assert.equal(month.days.find((day) => day.date === '2026-11-18').isAvailable, false)
})

test('limits selectable dates to the most recent year while retaining the boundary day', () => {
  const month = createMealCalendarMonth([
    { calories: 900, registeredAt: '2025-11-16T14:59:59.000Z' },
    { calories: 300, registeredAt: '2025-11-16T15:00:00.000Z' },
  ], '2025-11', '2026-11-17T00:30:00+09:00')

  assert.equal(month.days.find((day) => day.date === '2025-11-16').isAvailable, false)
  assert.deepEqual(month.days.find((day) => day.date === '2025-11-17').meals.map((meal) => meal.calories), [300])
})

test('moves between months across year boundaries', () => {
  assert.equal(shiftCalendarMonth('2026-01', -1), '2025-12')
  assert.equal(shiftCalendarMonth('2025-12', 1), '2026-01')
  assert.throws(() => shiftCalendarMonth('2026-13', 1), TypeError)
  assert.throws(() => shiftCalendarMonth('2026-01', 0.5), TypeError)
})
