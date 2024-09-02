<script setup lang="ts">
import type { ArticleCard } from '~/types/article.models'

const props = defineProps<{
  articles: ArticleCard[]
  pageSize: number
}>()

const currentPage = ref(1)
const scrollContainer = ref<HTMLElement | null>(null)

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * props.pageSize
  const end = start + props.pageSize
  return props.articles.slice(start, end)
})
</script>

<template>
  <ui-section>
    <div ref="scrollContainer">
      <slot />
      <div class="wrapper visability-hover">
        <article-card
          v-for="article in paginatedArticles"
          :key="article.id"
          :article="article"
        />
      </div>
      <div class="mt-4 flex w-full justify-end">
        <el-pagination
          v-model:current-page="currentPage"
          size="default"
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="articles.length"
          class="mt-4"
          @current-change="useScrollToElement(scrollContainer)"
        />
      </div>
    </div>
  </ui-section>
</template>

<style scoped lang="scss">
.wrapper {
  @apply grid gap-4;
  @media (min-width: theme('screens.lg')) {
    @apply grid-cols-2 gap-8;
  }
}
</style>
