<script lang="ts" setup>
import type { ProjectDetail } from '~/types/project.models'

const props = defineProps<{
  project: ProjectDetail
}>()
</script>

<template>
  <ui-section class="banner">
    <nuxt-img
      :alt="project.title"
      :placeholder="[75, 50, 50, 2]"
      :src="project.image"
      class="banner__image"
      fit="fill"
      format="webp"
    />
    <div class="banner__block">
      <div class="header">
        <div class="text">
          <ui-h1 class="title">{{ project.title }}</ui-h1>
          <p class="banner__description">{{ project.description }}</p>
        </div>
        <nuxt-img
          fit="fill"
          :placeholder="[150, 150, 20, 3]"
          format="webp"
          class="logo"
          :src="project.logo"
          :alt="project.title"
        />
      </div>
      <div class="footer">
        <div class="flex flex-wrap items-center gap-4 sm:gap-2">
          <ui-link
            v-for="link in project.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            type="button"
          >
            {{ link.name }}
          </ui-link>
          <ui-link href="/zayavka" type="button"> Заполнить заявку </ui-link>
        </div>
      </div>
    </div>
  </ui-section>
</template>

<style lang="scss" scoped>
.banner {
  @apply h-fit;
  position: relative;
  overflow: hidden;
  background: $semiBgColor;
  @media (min-width: theme('screens.md')) {
    background: none;
    @apply h-[650px];
  }

  &::before {
    @apply hidden md:block;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
  }

  &__image {
    @apply relative h-[400px] w-full md:absolute md:z-[-1] md:h-full;
    left: 0;
    top: 0;
    object-fit: cover;
  }

  &__block {
    @apply container relative z-[2] flex h-full  flex-col  justify-between  py-5;
  }

  &__description {
    @apply w-full text-base md:text-2xl md:text-white lg:w-3/4;
  }
}
.header {
  @apply mb-10 flex  flex-col-reverse justify-between gap-2;
  @media (min-width: theme('screens.md')) {
    @apply flex-row gap-5;
  }
}
.footer {
  @apply flex flex-col-reverse items-start justify-between gap-5 md:flex-row md:items-end;
}
.text {
  @apply flex flex-col justify-between;
  @media (min-width: theme('screens.md')) {
    @apply mb-8;
  }
}
.title {
  @apply md:text-white;
}
.logo {
  @apply h-24 flex-shrink-0 object-contain object-left md:h-[130px]  md:object-right;
  aspect-ratio: 1;
}
:deep(.el-anchor__list) {
  @apply flex flex-col items-start gap-1 md:items-end md:gap-0;
  padding-left: 0 !important;
}

:deep(.el-anchor__link) {
  @apply underline underline-offset-4 md:no-underline;
}
</style>
