const datePartsFormatter = new Intl.DateTimeFormat('en', {
  timeZone: 'Asia/Tokyo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

export function getJapanDateKey(value) {
  if (value == null || value === '') return null
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return null

  const parts = Object.fromEntries(
    datePartsFormatter.formatToParts(date).map(({ type, value: partValue }) => [type, partValue])
  )
  return `${parts.year}-${parts.month}-${parts.day}`
}
