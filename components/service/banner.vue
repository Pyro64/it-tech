<script setup lang="ts">
import type { ServiceDetail } from '~/types/service.models'

const props = defineProps<Pick<ServiceDetail, 'banner'>>()
</script>

<template>
  <ui-section class="aspect-[4/3] md:aspect-[2.5/1]">
    <nuxt-img
      alt="баннер"
      :placeholder="[75, 50, 50, 2]"
      :src="banner.image"
      class="image"
      fit="fill"
      format="webp"
    />
  </ui-section>
</template>

<style scoped lang="scss">
.image {
  @apply h-full w-full object-cover object-top;
}
</style>
