<script setup lang="ts">
import { TopRight, TopLeft, Top } from '@element-plus/icons-vue'
import type { Complexity, ComplexityMap } from '~/types/article.models'

const props = defineProps<{
  complexity: Complexity
}>()

const progressMap: Record<Complexity, ComplexityMap> = {
  easy: { percentage: 33, text: 'Легкий', color: '#22c55e', icon: TopLeft },
  medium: { percentage: 66, text: 'Средний', color: '#ff6b06', icon: Top },
  hard: {
    percentage: 100,
    text: 'Сложный',
    color: '#ff0606',
    icon: TopRight,
  },
}
const progress = progressMap[props.complexity]
</script>

<template>
  <div class="progress">
    <el-progress
      type="dashboard"
      :percentage="progress.percentage"
      :color="progress.color"
      :stroke-width="3"
      :width="24"
    >
      <el-icon class="!text-xs" :style="{ color: progress.color }">
        <component :is="progress.icon" />
      </el-icon>
    </el-progress>
    <p :style="{ color: progress.color }">{{ progress.text }}</p>
  </div>
</template>

<style scoped lang="scss">
.progress {
  @apply flex items-center gap-2;
}
</style>
