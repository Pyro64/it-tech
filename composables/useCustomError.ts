type Options = {
  description: string
  title?: string
  duration?: number
  showClose?: boolean
  showReload?: boolean
}
export const useCustomError = ({ description, title = 'Ошибка', duration = 3000, showClose = false, showReload = false }: Options) => {
  const message = `<p>${description}</p> ${showReload ? `<p>Попробуйте обновить страницу</p>` : ''}`
  return ElNotification({
    title: title,
    dangerouslyUseHTMLString: true,
    message: message,
    type: 'error',
    duration: duration,
    showClose: showClose,
  })
}
