export const containsDigits = new RegExp('\\d')

export const emailPattern = new RegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
)
export const hexPattern = new RegExp(/^[0-9A-F]{6}$/)

export const urlPattern = new RegExp(
  '^(https?:\\/\\/)' // Протокол http:// или https://
  + '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' // Домен
  + '((\\d{1,3}\\.){3}\\d{1,3}))' // Или IP (v4) адрес
  + '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' // Порт и путь
  + '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' // Параметры запроса
  + '(\\#[-a-zA-Z\\d_]*)?$' // Якорь
)
