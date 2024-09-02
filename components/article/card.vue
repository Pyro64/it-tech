<script setup lang="ts">
import type { ArticleCard } from '~/types/article.models'

const props = defineProps<{
  article: ArticleCard
}>()
</script>

<template>
  <article class="shadow-card article">
    <div class="wrapper">
      <div class="item">
        <div class="header">
          <article-time>{{ article.time }}</article-time>
          <article-created :created="article.created" />
        </div>
        <h2 class="title">{{ article.title }}</h2>
      </div>
      <nuxt-img
        fit="fill"
        :placeholder="[200, 150, 20, 3]"
        format="webp"
        class="image"
        :src="article.image"
        :alt="article.title"
      />
      <div class="content">
        <p class="text">{{ article.description }}</p>
        <div class="footer">
          <div class="info">
            <article-complexity :complexity="article.complexity" />
            <article-share :seo-url="article.seo_url" :title="article.title" />
          </div>
          <ui-link type="button" :to="`/stati/${article.seo_url}`">
            Читать далее
          </ui-link>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.article {
  @apply p-0;
  visibility: visible;
  @media (min-width: theme('screens.lg')) {
    @apply relative h-[400px] overflow-hidden bg-inherit;
  }
  &:hover {
    .wrapper {
      @apply text-white;
    }
    .image {
      @apply top-0 z-[-1] brightness-[0.2];
    }
    .content {
      bottom: 0;
    }
    .item {
      @apply top-0;
    }
  }
}
.title {
  @apply text-2xl font-medium;
  @media (min-width: theme('screens.lg')) {
    @apply line-clamp-2;
  }
}
.item {
  @apply mb-5;
  @media (min-width: theme('screens.lg')) {
    @apply relative top-[-45px] transition-all;
  }
}
.content {
  @apply mt-4;
  @media (min-width: theme('screens.lg')) {
    @apply relative bottom-[-300px] flex flex-grow flex-col transition-all;
  }
}
.wrapper {
  @apply flex h-full flex-col p-4;
}

.header {
  @apply mb-4 flex items-center justify-between;
}
.footer {
  @apply mt-4 flex w-full flex-col items-end justify-between gap-4;
  @media (min-width: theme('screens.sm')) {
    @apply flex-row items-center;
  }
}

.image {
  @apply h-[300px] w-full rounded-lg object-cover;
  @media (min-width: theme('screens.sm')) {
    @apply h-[400px];
  }
  @media (min-width: theme('screens.lg')) {
    @apply absolute left-0 top-1/4 h-full transition-all;
  }
}
.info {
  @apply flex w-full items-center justify-between gap-3;
  @media (min-width: theme('screens.sm')) {
    @apply w-fit justify-start;
  }
}
.text {
  @apply line-clamp-6 flex-grow;
}
</style>
