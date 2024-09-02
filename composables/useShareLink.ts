export const useShareLink = (url: string, title: string, text?: string) => {
  const { share, isSupported } = useShare()
  const { copy } = useClipboard()
  if (isSupported.value) {
    share({
      title: title,
      text: text,
      url: url,
    }).catch(error => {
      console.error('Ошибка при попытке поделиться:', error)
    })
  } else {
    copy(url)
    ElNotification({
      type: 'success',
      title: 'Поделиться',
      dangerouslyUseHTMLString: true,
      message: `Ссылка ${url} <p>скопирована в буфер обмена</p>`,
      duration: 3000
    })
  }
}
