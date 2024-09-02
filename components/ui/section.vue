<script setup lang="ts"></script>

<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
.section {
  @apply mb-[50px] sm:mb-[75px] xl:mb-[100px];
}
</style>
