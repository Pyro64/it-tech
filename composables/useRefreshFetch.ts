import type { FetchOptions, ResponseType } from 'ofetch'

export const useRefreshFetch = async (url: string | (() => string), options: FetchOptions<ResponseType>) => {
  const cookieToken = useCookie('token')
  try {
    const newToken = await useRefreshToken()
    cookieToken.value = newToken

    // возможно потом расскоментировать,с ним 2 раза вызов функции

    // options.headers = { Authorization: `Bearer ${newToken}` }
    // useFetch(url, options as UseFetchOptions<any>)
  } catch (error) {
    console.error('Token refresh failed:', error)
  }
}
