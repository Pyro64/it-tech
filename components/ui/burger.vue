<script setup lang="ts">
import { Operation } from '@element-plus/icons-vue'

const props = defineProps<{
  isOpen?: boolean
}>()
</script>

<template>
  <el-icon class="burger">
    <Operation />
  </el-icon>
</template>

<style scoped lang="scss">
.burger {
  @apply block text-[40px] md:hidden;
}
</style>
