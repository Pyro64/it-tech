<script setup lang="ts">
const infoAboutCookie = useCookie('cookieconfirm', {
  // 291 день
  maxAge: 25200000,
  default: () => 'open',
})
const confirmCookie = () => {
  infoAboutCookie.value = 'close'
  refreshCookie('cookieconfirm')
}
</script>

<template>
  <transition name="swipe" mode="out-in">
    <div
      v-if="infoAboutCookie === 'open'"
      class="fixed bottom-3 right-3 z-20 ml-3 w-fit"
    >
      <el-alert
        title="Cookie"
        type="info"
        :closable="false"
        class="shadow-card"
      >
        <el-text type="info">
          Пользуясь нашим сайтом, вы соглашаетесь с тем, <br />
          что мы используем cookies
        </el-text>
        <el-button class="mt-3 w-full" type="primary" @click="confirmCookie()">
          Понятно
        </el-button>
      </el-alert>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
