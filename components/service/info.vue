<script setup lang="ts">
import type { Collapse, Popover } from '~/types/ui.models'

const props = defineProps<{
  info: Collapse[]
  tools: Popover[]
}>()
</script>

<template>
  <div class="shadow-card item">
    <div class="wrapper">
      <ui-h3>FAQ</ui-h3>
      <p class="description">о разработке</p>
      <app-collapse :faq="props.info" />
    </div>
    <div class="wrapper">
      <ui-h3>Инструменты</ui-h3>
      <p class="description">необходимые на работе</p>
      <div class="flex flex-wrap gap-1">
        <ui-popover v-for="el in props.tools" :key="el.title" :el="el" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.description {
  @apply mb-4 text-lg font-medium text-[#7F8084];
  @media (min-width: theme('screens.md')) {
    @include fluid(font-size, 18px, 20px);
  }
}
.item {
  @apply mb-8 flex flex-col gap-10 lg:flex-row lg:gap-5;
}
.wrapper {
  @apply flex w-full flex-col items-center lg:w-1/2;
}
</style>
