<script setup lang="ts">
import type { Anchor } from '~/types/ui.models'

const props = defineProps<{
  anchorLinks: Anchor[]
}>()
</script>

<template>
  <el-anchor :marker="false" :offset="150" class="anchor">
    <el-tooltip
      v-for="link in anchorLinks"
      :key="link.href"
      class="box-item"
      effect="dark"
      :content="link.name"
      placement="left"
    >
      <el-anchor-link :href="`#${link.href}`" class="link">
        <div class="line" />
      </el-anchor-link>
    </el-tooltip>
  </el-anchor>
</template>

<style scoped lang="scss">
.anchor {
  @apply fixed right-[25px] top-1/2 z-[5] w-fit;
  transform: translateY(-50%);
  background: none;
}

.line {
  @apply h-[3px] w-5 rounded-[3px];
  background: $textColor;
  opacity: 0.7;
  transition: 0.7s ease-in-out;
}

.el-anchor__link.is-active {
  .line {
    background: var(--el-anchor-active-color);
    opacity: 1;
  }
}
</style>
