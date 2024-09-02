<script setup lang="ts">
import type { ArticleBase } from '~/types/article.models'

const props = defineProps<ArticleBase>()
</script>

<template>
  <div>
    <ui-h1>{{ props.title }}</ui-h1>
    <nuxt-img
      fit="fill"
      :placeholder="[75, 50, 50, 2]"
      format="webp"
      class="image"
      :src="props.image"
      :alt="props.title"
    />
    <div
      class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
    >
      <div
        class="flex flex-row-reverse items-center justify-between gap-3 sm:flex-row"
      >
        <article-created :created="props.created" />
        <article-time>{{ props.time }}</article-time>
      </div>
      <div class="flex flex-row items-center justify-between gap-3">
        <article-complexity :complexity="props.complexity" />
        <article-share :seo-url="props.seo_url" :title="props.title" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image {
  @apply mb-4 h-[350px] w-full sm:h-[500px];
  object-fit: cover;
}
</style>
