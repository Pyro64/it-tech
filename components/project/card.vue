<script setup lang="ts">
import type { ProjectCard } from '~/types/project.models'
import type { Tag } from '~/types/ui.models'

const props = defineProps<{
  project: ProjectCard
  tagsType: 'services' | 'tools'
}>()

let tags: Tag[] = []

switch (props.tagsType) {
  case 'services':
    // Извлекаем title из каждого элемента в services
    tags = props.project.services.map(service => service.title as string)
    break
  case 'tools':
    // Собираем все инструменты из всех сервисов и извлекаем их названия
    tags = props.project.services.flatMap(service =>
      service.tools.map(tool => tool.title)
    )
    break
}
</script>

<template>
  <div class="card shadow-card">
    <div class="card__block">
      <div class="card__header">
        <p class="card__title">{{ project.title }}</p>
        <nuxt-img
          fit="fill"
          :placeholder="[150, 200, 20, 3]"
          format="webp"
          class="card__image"
          :src="project.logo"
          :alt="project.title"
        />
      </div>
      <p class="line-clamp-6 flex-grow lg:line-clamp-4">
        {{ project.description }}
      </p>
      <div>
        <el-divider />
        <div class="card__item">
          <ui-link type="button" :href="`/proekty/${project.seo_url}`">
            Подробнее
          </ui-link>
          <ui-tags v-if="tags.length > 0" :tags="tags" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply overflow-hidden;
  visibility: visible;
  &__header {
    @apply mb-3 flex items-start justify-between gap-3;
  }
  &__title {
    @apply text-lg font-semibold sm:text-xl;
  }
  &__block {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  &__item {
    @apply flex flex-col-reverse items-end justify-between gap-5 sm:flex-row;
  }
  &__image {
    @apply object-contain;
    width: 60px;
    height: 60px;
    filter: invert(1);
  }
}
</style>
