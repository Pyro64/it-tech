<script setup lang="ts"></script>

<template>
  <ui-section class="banner">
    <div>
      <ui-h1 class="!mb-4 uppercase">IT компания</ui-h1>
      <ui-h2 class="text-semi-400">по разработке ПО мирового уровня</ui-h2>
    </div>
    <div class="animation">
      <ui-lottie name="people-charts" />
    </div>
  </ui-section>
</template>

<style scoped lang="scss">
.banner {
  @apply flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center;
}
.animation {
  @apply h-[300px] w-full;
  @media (min-width: theme('screens.sm')) {
    @apply h-[400px] w-[400px];
  }
  @media (min-width: theme('screens.lg')) {
    @apply h-[450px] w-1/2;
  }
}
</style>
