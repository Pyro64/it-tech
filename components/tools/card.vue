<script setup lang="ts">
import type { Tool } from '~/types/ui.models'

const props = defineProps<{
  tool: Tool
}>()
</script>

<template>
  <nuxt-link :href="tool.link" target="_blank" class="tool shadow-card">
    <nuxt-img
      :src="tool.image"
      fit="fill"
      :placeholder="[150, 150, 20, 3]"
      format="webp"
      :alt="tool.title"
      class="logo"
    />
    <p class="title">{{ tool.title }}</p>
    <p class="text">{{ tool.description }}</p>
  </nuxt-link>
</template>

<style scoped lang="scss">
.tool {
  @apply ring-1 ring-blue-400 ring-offset-1 ring-offset-main-300 transition dark:ring-offset-main-500;
  visibility: visible;

  @media (min-width: theme('screens.md')) {
    @apply ring-offset-0;
    &:hover {
      @apply ring-offset-2;
    }
  }
}

.logo {
  @apply mb-3 h-24 w-24;
}
.title {
  @apply mb-4 text-2xl font-semibold;
}
.text {
  @apply text-balance;
}
</style>
