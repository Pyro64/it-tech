<script setup lang="ts"></script>

<template>
  <div class="skeleton" />
</template>

<style scoped lang="scss">
.skeleton {
  @apply animate-pulse rounded;
  background: $hintColor;
}
</style>
