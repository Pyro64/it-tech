import type { AuthForm, AuthParamsRequest, AuthResponse, ErrorAuthResponse } from '~/types/auth.models'

export const useAuthStore = defineStore('auth', () => {
  const guardStore = useGuardStore()
  const config = useRuntimeConfig()
  const router = useRouter()
  const redirectPath = useCookie('redirect', {
    default: () => '/',
  })
  const { signIn } = guardStore
  const authFormState = reactive<AuthForm>({
    email: '',
    password: '',
  })

  const redirectToPage = () => {
    router.push(redirectPath.value)
  }
  const authRequest = async (form: AuthForm, isLoading: Ref<boolean>) => {
    isLoading.value = true
    const authBodyParams = new URLSearchParams()

    const authRequestData: AuthParamsRequest = { ...authDataRequest,
      scope: 'openid offline_access api profile',
      grant_type: 'password',
      password: form.password,
      username: form.email,
    }

    Object.entries(authRequestData).forEach(([key, value]) => {
      authBodyParams.append(key, value)
    })
    await $fetch(`connect/token`, {
      headers: {
        append: '"Content-Type", "application/x-www-form-urlencoded"',
      },
      baseURL: config.public.API_BASE_URL,
      body: authBodyParams,
      method: 'POST',
      onRequestError({ error }) {
        useCustomError({
          title: 'Ошибка при запросе на сервер',
          description: `<p>${error.message}</p>`,
        })
      },
      onResponseError({ response }) {
        // ошибка с бекенда
        const error = response._data as ErrorAuthResponse
        useCustomError({
          title: 'Ошибка при ответе от сервера',
          description: `<p>${error.error_description}</p>`,
        })
      },
      onResponse({ response }) {
        if (response.status === 200) {
          const data = response._data as AuthResponse
          signIn(data.access_token, data.refresh_token)
          redirectToPage()
          authFormState.email = ''
          authFormState.password = ''
          ElMessage({
            message: 'Авторизация прошла успешно',
            type: 'success',
            duration: 2000,
          })
        }
      },
    }).finally(() => {
      isLoading.value = false
    })
  }
  return { authRequest, authFormState }
})
