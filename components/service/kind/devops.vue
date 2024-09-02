<script setup lang="ts">
import type { ServiceProjectDevops } from '~/types/service.models'

const props = defineProps<ServiceProjectDevops>()
</script>

<template>
  <ui-section :id="props.anchor_link">
    <ui-h2>{{ props.name }}</ui-h2>
    <chart-bar :data="props.data" />
    <ui-html v-if="props.text" class="mt-8" :html="props.text" />
  </ui-section>
</template>

<style scoped lang="scss"></style>
