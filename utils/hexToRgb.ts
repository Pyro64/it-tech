export function hexToRgb(hex: string) {
  // Убираем символ #, если он есть и приводим к верхнему регистру
  hex = hex.replace(/^#/, '').toUpperCase()

  // Если короткий формат (например, #03F), преобразуем его в длинный (например, #0033FF)
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('')
  }
  // Извлекаем значения красного, зеленого и синего цветов и возвращаем строку в формате RGB
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return { r, g, b }
}
