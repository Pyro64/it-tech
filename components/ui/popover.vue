<script setup lang="ts">
import type { Popover } from '~/types/ui.models'

const props = defineProps<{
  el: Popover
}>()
</script>

<template>
  <el-popover
    placement="top"
    :width="300"
    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
  >
    <template #reference>
      <div class="item">
        <nuxt-img
          fit="fill"
          :placeholder="[150, 150, 20, 3]"
          format="webp"
          class="image"
          :alt="el.title"
          :src="el.image"
        />
        <p class="title">{{ el.title }}</p>
      </div>
    </template>
    <template #default>
      <div>
        <p class="mb-2 text-base font-bold">{{ el.title }}</p>
        <p class="text-base">{{ el.description }}</p>
      </div>
    </template>
  </el-popover>
</template>

<style scoped lang="scss">
.item {
  @apply flex w-fit cursor-pointer items-center gap-3 rounded-lg border-[0.5px] border-blue-500/70 p-[6px] pr-4;
  background: $bgColor;
}
.title {
  @apply text-sm font-bold;
}
.image {
  @apply h-8 w-8 flex-shrink-0 object-contain;
}
</style>
