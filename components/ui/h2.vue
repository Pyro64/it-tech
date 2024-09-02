<script setup lang="ts"></script>

<template>
  <h2 class="subtitle">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
.subtitle {
  @apply mb-5 text-2xl font-semibold md:mb-8 md:text-3xl xl:text-4xl;
}
</style>
