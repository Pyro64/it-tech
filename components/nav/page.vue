<script setup lang="ts">
import type { NavLink } from '~/types/ui.models'

const props = defineProps<{
  links: NavLink[]
}>()
</script>

<template>
  <nav class="nav">
    <ui-link v-for="link in links" :key="link.name" :href="link.href">
      {{ link.name }}
    </ui-link>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  @apply flex flex-col justify-between gap-4 transition-all  md:flex-row md:pt-4;
}
</style>
