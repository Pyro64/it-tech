import type { UserInfo, UserProfile, UserProfileResponse } from '~/types/user.models'

export const useUserStore = defineStore('user', () => {
  const config = useRuntimeConfig()
  const cookieToken = useCookie('token')
  const isOpenDrawer = ref(false)
  const isBadge = ref(false)
  const isLoading = ref(false)
  const userData = ref<UserProfile | null>(null)
  const mockAvatar = '/images/avatar.svg'

  const userInfo = computed<UserInfo>(() => {
    if (userData.value) {
      return {
        firstName: userData.value.firstName,
        lastName: userData.value.lastName,
        avatarUrl: userData.value.avatarUrl || mockAvatar,
      }
    } else {
      return {
        firstName: '',
        lastName: '',
        avatarUrl: mockAvatar,
      }
    }
  })

  /**
   * @param {string} token - Токен из cookie.
   */
  const updateUserInfo = async (token: string) => {
    // токен передается,потому что в момент инициализации стора,cookieToken undefined.
    // Инициализация сторов auth -> guard -> user
    isLoading.value = true
    await $fetch('api/Account/current', {
      baseURL: config.public.API_BASE_URL,
      key: 'account',
      headers: { Authorization: `Bearer ${token}` },
      onRequestError() {
        ElMessage({
          message: 'Ошибка при отправки данных об аккаунте',
          type: 'error',
          duration: 0,
          showClose: true,
          grouping: true,
        })
      },
      onResponseError({ response, options }) {
        if (response.status === 401) {
          useRefreshFetch('api/Account/current', options)
        } else {
          useCustomError({
            title: 'Ошибка при получении данных об аккаунте',
            description: `<p>Код: ${response.status}</p>
                <p>Статус: ${response.statusText}</p>`,
            duration: 0,
            showClose: true,
          })
        }
      },
      onResponse({ response }) {
        if (response.status === 200) {
          const data: UserProfileResponse = response._data
          userData.value = data.message
        }
      },
    }).finally(() => {
      isLoading.value = false
    })
  }

  if (cookieToken.value) {
    updateUserInfo(cookieToken.value)
  }

  // Функция очистки информации о пользователе
  const clearUserInfo = () => {
    userData.value = null
  }

  return {
    isOpenDrawer,
    isBadge,
    userInfo,
    isLoading,
    clearUserInfo,
    updateUserInfo,
  }
})
