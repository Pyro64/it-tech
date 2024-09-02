<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError<unknown>
  clear: Promise<void>
}>()
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex h-lvh items-center justify-center">
    <div class="flex flex-col items-center">
      <div class="animation">
        <ui-lottie name="error" />
      </div>
      <ui-h2>{{ `Статус : ${props.error.statusCode}` }}</ui-h2>
      <ui-h3>{{ `Сообщение: ${props.error.message}` }}</ui-h3>
      <el-button size="large" type="primary" @click="handleError()">
        На главную
      </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.animation {
  @apply mb-4 h-2/3 w-2/3;
  @media (min-width: theme('screens.sm')) {
    @apply h-[150px] w-[150px];
  }
  @media (min-width: theme('screens.lg')) {
    @apply h-[200px] w-[200px];
  }
}
</style>
