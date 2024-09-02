import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig()
  const token = useCookie('token')

  const nuxtApp = useNuxtApp()
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.API_BASE_URL,
    // возможно с этим свойством будут проблемы
    dedupe: 'defer',
    headers: token.value ? { Authorization: `Bearer ${token.value}` } : {},
    onResponseError: async ({ response, options }) => {
      if (response.status === 401) {
        useRefreshFetch(url, options)
      }
    },
    getCachedData(key) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    },
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}
