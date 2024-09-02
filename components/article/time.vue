<script setup lang="ts">
import { Clock } from '@element-plus/icons-vue'
</script>

<template>
  <div class="time">
    <el-icon><Clock /></el-icon>
    <p><slot /> мин</p>
  </div>
</template>

<style scoped lang="scss">
.time {
  @apply flex items-center gap-2;
}
</style>
