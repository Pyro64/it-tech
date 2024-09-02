<script setup lang="ts"></script>

<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style scoped lang="scss">
.title {
  @apply mb-8 w-fit text-3xl font-bold md:text-4xl xl:text-5xl;
  view-transition-name: title;
}
</style>
