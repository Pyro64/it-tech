<script setup lang="ts"></script>

<template>
  <h3 class="title"><slot /></h3>
</template>

<style scoped lang="scss">
.title {
  @apply mb-3 w-fit text-xl font-medium md:mb-5 md:text-2xl xl:text-3xl;
  view-transition-name: h3;
}
</style>
