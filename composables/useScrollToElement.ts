type RefElement = Ref<HTMLElement | null> | HTMLElement | null
export const useScrollToElement = (ref: RefElement): void => {
  const unwrappedRef = unref(ref)
  if (unwrappedRef && import.meta.client) {
    window.scrollTo({
      top: unwrappedRef.offsetTop - 100,
      behavior: 'smooth',
    })
  } else return
}
