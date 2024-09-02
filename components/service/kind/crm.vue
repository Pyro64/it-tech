<script setup lang="ts">
import type { ServiceProjectCrm } from '~/types/service.models'

const props = defineProps<ServiceProjectCrm>()
</script>

<template>
  <ui-section :id="props.anchor_link">
    <ui-h2>{{ props.name }}</ui-h2>
    <service-info :info="props.info" :tools="props.tools" />
    <ui-html v-if="props.text" :html="props.text" />
  </ui-section>
</template>

<style scoped lang="scss"></style>
