<script setup lang="ts">
import type { ServiceCard } from '~/types/service.models'

const props = defineProps<{
  item: ServiceCard
}>()
</script>

<template>
  <nuxt-link :to="`/uslugi/${item.seo_url}`" class="shadow-card block">
    <nuxt-img
      :src="item.svg"
      fit="fill"
      :placeholder="[150, 150, 20, 3]"
      format="webp"
      :alt="item.title"
      class="svg"
    />
    <p class="mb-2 text-xl font-bold">{{ item.title }}</p>
    <p class="line-clamp-6">
      {{ item.text }}
    </p>
  </nuxt-link>
</template>

<style scoped lang="scss">
.block {
  @apply z-[2]  bg-white ring-1 ring-blue-400  ring-offset-1 ring-offset-main-300 dark:bg-slate-950 dark:ring-offset-main-500;
  visibility: visible;
  @media (min-width: theme('screens.md')) {
    @apply ring-offset-0;
    &:hover {
      @apply bg-white/70 ring-offset-2 backdrop-brightness-[.70] dark:bg-slate-950/90;
    }
  }
}
.svg {
  @apply mb-2 h-14 w-14 object-contain;
}
</style>
