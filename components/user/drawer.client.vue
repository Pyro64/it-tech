<script setup lang="ts">
// store
const useUser = useUserStore()
const useGuard = useGuardStore()
const global = useGlobalStore()
const { signOut } = useGuard
const { token } = storeToRefs(useGuard)
const { isOpenDrawer, userInfo } = storeToRefs(useUser)
const { isMobile } = storeToRefs(global)

const redirectPath = useCookie('redirect')
const route = useRoute()

const target = useSwipeChange(isOpenDrawer, 'right')

const loginHandler = () => {
  isOpenDrawer.value = false
  redirectPath.value = route.path
}
const outHandler = () => {
  signOut()
}
const title = computed(() => {
  return userInfo.value.firstName === ''
    ? `Меню`
    : `${userInfo.value.firstName} ${userInfo.value.lastName}`
})
</script>

<template>
  <div ref="target">
    <el-drawer
      v-model="isOpenDrawer"
      :title="title"
      :size="isMobile ? `80%` : 500"
    >
      <transition name="swipe" mode="out-in">
        <div v-if="token" class="flex h-full flex-col">
          <div>
            <nav-lk />
            <el-divider border-style="solid" />
          </div>
        </div>
        <div
          v-else
          class="flex h-full flex-grow flex-col items-center justify-center"
        >
          <p class="mb-5 text-center text-lg font-medium">Вы не авторизованы</p>
          <ui-link
            href="/auth"
            class="cursor-pointer text-center"
            @click="loginHandler"
          >
            Войти
          </ui-link>
        </div>
      </transition>
      <template #footer>
        <el-divider border-style="solid" class="themeDivider" />
        <div
          class="flex flex-col justify-between gap-3 lg:flex-row lg:items-center"
        >
          <app-theme />
          <el-button v-if="token" type="primary" @click="outHandler">
            Выйти
          </el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<style scoped lang="scss">
.themeDivider {
  @apply mt-0;
}
</style>
