// Функция для форматирования числа с разделителями тысяч
export const useFormateNumber = (number: string | Ref<string>): string => {
  const unwrappedNumber = unref(number)
  // Используем Intl.NumberFormat для форматирования чисел
  const formatter = new Intl.NumberFormat('ru-RU')
  const formattedNumber = formatter.format(Number(unwrappedNumber))
  return formattedNumber
}
