<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-end justify-between border-[6px] border-solid border-main-500 bg-slate-950 p-10"
  >
    <img
      class="h-42 w-42 mb-12 object-contain"
      src="/logo.svg"
    >
    <h1
      class="relative z-50 flex-grow text-balance text-left text-[40px] text-white"
    >
      {{ title }}
    </h1>
    <div class="flex flex-row items-center gap-5 text-4xl">
      <p class="text-gray-200">Made by</p>
      <div class="flex flex-row items-center font-bold">
        <span class="text-main-500">JOY</span>
        <span class="text-semi-500">Tech</span>
      </div>
    </div>
    <img
      class="absolute left-0 top-[20px] z-[1] h-full w-1/2 object-contain opacity-50"
      src="/images/notebook-joytech.png"
    >
  </div>
</template>

<style scoped lang="scss"></style>
