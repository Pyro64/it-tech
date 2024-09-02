<script setup lang="ts"></script>

<template>
  <nuxt-layout name="default">
    <div class="page">
      <div class="animation">
        <ui-lottie name="laptop" />
      </div>
      <div class="page__block">
        <slot />
      </div>
    </div>
  </nuxt-layout>
</template>

<style scoped lang="scss">
.page {
  @apply container flex min-h-screen w-full items-center justify-center gap-5 py-16;

  &__block {
    @apply relative z-10 w-full rounded-2xl  bg-white/80 px-5 pt-16 backdrop-blur-sm dark:bg-slate-950/80;
    box-shadow: $boxShadow;
    @media (min-width: theme('screens.sm')) {
      @apply w-3/4;
    }
    @media (min-width: theme('screens.lg')) {
      @apply w-1/2 bg-white backdrop-blur-none dark:bg-slate-950;
    }
  }
}
.animation {
  @apply h-[430px] w-full;
  object-fit: contain;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  @media (min-width: theme('screens.sm')) {
    @apply h-[500px] w-1/2;
  }
  @media (min-width: theme('screens.lg')) {
    @apply static h-[680px] w-1/2 transform-none opacity-100;
  }
}
</style>
