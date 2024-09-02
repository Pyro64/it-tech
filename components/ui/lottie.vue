<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'

const props = defineProps<{
  name: string
}>()
</script>

<template>
  <client-only fallback-tag="div">
    <template #fallback>
      <ui-skeleton class="h-full w-full" />
    </template>
    <Vue3Lottie :animation-link="`/lottie/${name}.json`" :loop="true" />
  </client-only>
</template>

<style scoped lang="scss"></style>
