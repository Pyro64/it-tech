<script setup lang="ts">
import type { Tag } from '@/types/ui.models'

const props = defineProps<{
  tags: Tag[]
}>()
</script>

<template>
  <el-scrollbar>
    <div class="tags">
      <el-tag
        v-for="tag in tags"
        :key="tag"
        type="info"
        size="large"
        class="tags__item"
      >
        {{ tag }}
      </el-tag>
    </div>
  </el-scrollbar>
</template>

<style scoped lang="scss">
.tags {
  @apply flex w-fit max-w-[290px] items-center gap-2 sm:max-w-[330px];
  &__item {
    @apply w-fit transition;
    background: $semiBgColor;
    border: 1px solid $hintColor;
    color: $textColor;
    font-weight: 600;
  }
}
</style>
