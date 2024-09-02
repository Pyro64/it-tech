<script setup lang="ts"></script>

<template>
  <div class="block">
    <div class="animation">
      <ui-lottie name="empty" />
    </div>
    <p class="text-base font-semibold lg:text-xl">
      <slot> Список пуст или данные не загружены </slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
.block {
  @apply relative flex flex-col justify-center items-center;
}
.animation {
  @apply aspect-square h-64
}
</style>
