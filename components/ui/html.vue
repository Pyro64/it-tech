<script setup lang="ts">
const props = defineProps<{
  html: string
}>()
</script>

<template>
  <article
    class="prose max-w-full text-sm dark:prose-invert sm:text-lg md:text-base"
    v-html="html"
  />
</template>

<style scoped lang="scss"></style>
