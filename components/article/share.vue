<script setup lang="ts">
import { useShareLink } from '@/composables/useShareLink'

const props = defineProps<{
  seoUrl: string
  title: string
}>()
const config = useRuntimeConfig()
const shareLink = `${config.public.SITE_URL}/stati/${props.seoUrl}`
</script>

<template>
  <ui-share @share-link="useShareLink(shareLink, props.title)" />
</template>

<style scoped lang="scss"></style>
