export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (!token.value && to.path.startsWith('/lk')) {
    return navigateTo('/auth')
  }
})
