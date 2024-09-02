export const useSiteName = (isUpperCase?: boolean) => {
  const config = useRuntimeConfig()
  const name = config.public.SITE_NAME
  if (isUpperCase) {
    return name.toUpperCase()
  }
  return name
}
