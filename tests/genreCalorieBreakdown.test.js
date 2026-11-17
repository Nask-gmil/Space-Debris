import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createGenreCalorieBreakdown,
  getGenreCalorieColor,
} from '../src/data/genreCalorieBreakdown.js'

test('aggregates genre lifetime totals and calculates their percentages', () => {
  const breakdown = createGenreCalorieBreakdown({
    lifetimeCalories: 1200,
    lifetimeCaloriesByGenre: {
      寿司: 250,
      '寿司 ': 50,
      ラーメン: 200,
      カレー: 0,
    },
  })

  assert.equal(breakdown.totalCalories, 500)
  assert.deepEqual(breakdown.genres, [
    { genre: '寿司', calories: 300, percentage: 60 },
    { genre: 'ラーメン', calories: 200, percentage: 40 },
  ])
})

test('uses only recorded genre lifetime totals, not unclassified history', () => {
  const breakdown = createGenreCalorieBreakdown({
    lifetimeCalories: 900,
    lifetimeCaloriesByGenre: { 寿司: 200 },
    processedFoodEntries: {
      legacy: { calories: 500, genre: null, genreStatsEligible: false },
    },
  })

  assert.equal(breakdown.totalCalories, 200)
  assert.deepEqual(breakdown.genres.map(({ genre, calories }) => ({ genre, calories })), [
    { genre: '寿司', calories: 200 },
  ])
})

test('returns an empty breakdown for missing or zero genre totals', () => {
  assert.deepEqual(createGenreCalorieBreakdown(null), { totalCalories: 0, genres: [] })
  assert.deepEqual(
    createGenreCalorieBreakdown({ lifetimeCaloriesByGenre: { 寿司: 0 } }),
    { totalCalories: 0, genres: [] },
  )
})

test('assigns a stable color to each genre', () => {
  assert.equal(getGenreCalorieColor('寿司'), getGenreCalorieColor('寿司'))
  assert.match(getGenreCalorieColor('寿司'), /^hsl\(\d+ 72% 58%\)$/)
})
