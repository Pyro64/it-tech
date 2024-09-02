<script setup lang="ts">
import type { ArticleBase } from '~/types/article.models'

const props = defineProps<Pick<ArticleBase, 'created'>>()
</script>

<template>
  <time>{{ props.created }}</time>
</template>

<style scoped lang="scss"></style>
