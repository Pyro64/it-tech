import type { AuthResponse, RefeshParamsRequest } from '~/types/auth.models'

export async function useRefreshToken() {
  const guard = useGuardStore()
  const { signIn } = guard
  const refreshToken = useCookie('refreshToken')
  const refrechBodyParams = new URLSearchParams()
  const config = useRuntimeConfig()
  if (refreshToken.value) {
    const authRequestData: RefeshParamsRequest = { ...authDataRequest,
      scope: 'openid offline_access',
      grant_type: 'refresh_token',
      refresh_token: refreshToken.value,
    }
    Object.entries(authRequestData).forEach(([key, value]) => {
      refrechBodyParams.append(key, value)
    })
    const { data, status } = await useFetch<AuthResponse>(
      `connect/token`,
      {
        headers: {
          append: '"Content-Type", "application/x-www-form-urlencoded"',
        },
        baseURL: config.public.API_BASE_URL,
        method: 'POST',
        key: 'refresh',
        body: refrechBodyParams,
      },

    )
    if (status.value === 'success' && data.value) {
      signIn(data.value.access_token, data.value.refresh_token)
      return data.value.access_token
    } else {
      throw new Error('Token refresh failed')
    }
  }
}
