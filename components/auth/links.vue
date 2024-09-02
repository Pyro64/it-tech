<script setup lang="ts">
import type { SignLink } from '~/types/auth.models'

const props = defineProps<{
  links: SignLink[]
}>()
</script>

<template>
  <div class="links">
    <div
      v-for="item in props.links"
      :key="item.title"
      class="flex flex-col gap-2 sm:flex-row"
    >
      <p class="text-base font-semibold">{{ item.title }}</p>
      <ui-link :href="item.src">{{ item.text }}</ui-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.links {
  @apply mb-4 flex flex-col gap-4;
  view-transition-name: auth-links;
}
</style>
