<script setup lang="ts">
import { Link } from '@element-plus/icons-vue'

const emit = defineEmits(['shareLink'])
const disabled = ref(false)

const { start, stop } = useTimeoutFn(() => {
  disabled.value = false
}, 2000)

onUnmounted(() => {
  stop()
})

const handle = () => {
  disabled.value = true
  emit('shareLink')
  start()
}
</script>

<template>
  <el-button :text="true" :disabled="disabled" @click="handle" class="share">
    <el-icon class="icon">
      <Link />
    </el-icon>
    <p class="text-base">Поделится</p>
  </el-button>
</template>

<style scoped lang="scss">
.share {
  @apply flex h-fit cursor-pointer items-center p-0 text-2xl text-blue-500 transition dark:text-blue-400;
  background: none !important;
  &:hover {
    @apply text-blue-400 dark:text-blue-300;
  }
}
.icon {
  @apply mr-2;
}
</style>
