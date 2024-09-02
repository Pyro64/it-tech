export const useGuardStore = defineStore('guard', () => {
  const user = useUserStore()
  const { clearUserInfo, updateUserInfo } = user
  const refreshToken = useCookie('refreshToken', {
    maxAge: 60 * 60 * 1000 * 6,
  })
  const token = useCookie('token', {
    // 3 часа
    maxAge: 108000,
  })

  const signIn = (tkn: string, rfrtkn: string) => {
    token.value = tkn
    refreshToken.value = rfrtkn
    updateUserInfo(token.value)
  }
  const signOut = () => {
    token.value = null
    refreshToken.value = null
    clearUserInfo()
    ElMessage({
      message: 'Выполнен выход из аккаунта',
      type: 'success',
      duration: 2000,
    })
  }

  return { signIn, signOut, token }
})
