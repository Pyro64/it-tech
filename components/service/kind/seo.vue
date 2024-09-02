<script setup lang="ts">
import type { ServiceProjectSeo } from '~/types/service.models'

const props = defineProps<ServiceProjectSeo>()
</script>

<template>
  <ui-section :id="props.anchor_link">
    <ui-h2>{{ props.name }}</ui-h2>
    <chart-line :data="props.data" />
    <ui-html v-if="props.text" class="mt-8" :html="props.text" />
  </ui-section>
</template>

<style scoped lang="scss"></style>
