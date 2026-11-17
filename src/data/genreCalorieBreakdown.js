export function createGenreCalorieBreakdown(achievementRecords) {
  const source = achievementRecords?.lifetimeCaloriesByGenre
  const totalsByNormalizedGenre = new Map()

  if (source && typeof source === 'object' && !Array.isArray(source)) {
    Object.entries(source).forEach(([genre, value]) => {
      const normalizedGenre = typeof genre === 'string' ? genre.trim() : ''
      const calories = Number(value)
      if (!normalizedGenre || !Number.isFinite(calories) || calories <= 0) return

      const normalizedKey = normalizedGenre.toLowerCase()
      const existing = totalsByNormalizedGenre.get(normalizedKey)
      if (existing) existing.calories += calories
      else totalsByNormalizedGenre.set(normalizedKey, { genre: normalizedGenre, calories })
    })
  }

  const totalCalories = [...totalsByNormalizedGenre.values()]
    .reduce((total, item) => total + item.calories, 0)
  const genres = [...totalsByNormalizedGenre.values()]
    .map(({ genre, calories }) => ({
      genre,
      calories,
      percentage: totalCalories > 0 ? (calories / totalCalories) * 100 : 0,
    }))
    .sort((first, second) =>
      second.calories - first.calories || first.genre.localeCompare(second.genre, 'ja'))

  return { totalCalories, genres }
}

export function getGenreCalorieColor(genre) {
  let hash = 2166136261
  for (const character of genre) {
    hash ^= character.codePointAt(0)
    hash = Math.imul(hash, 16777619)
  }
  const hue = (hash >>> 0) % 360
  return `hsl(${hue} 72% 58%)`
}
