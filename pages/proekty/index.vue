<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import type { ProjectCard } from '~/types/project.models'

// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – Проекты`,
  description: `${name} — IT компания по разработке сайтов и мобильных приложений`,
})
defineOgImageComponent('main', {
  title: `${name} – Список проектов 📒`,
})
const projects: ProjectCard[] = [
  {
    id: 1,
    title: 'Lorem power',
    seo_url: 'lerempower',
    description:
      'Lorem Power — это инновационный проект, предоставляющий услугу аренды пауэрбанков в Германии. Для удобства пользователей было разработано мобильное приложение и сайт, которые позволяют легко находить, арендовать и возвращать пауэрбанки.',
    services: [
      {
        title: 'Разработка сайта',
        tools: [
          {
            title: 'VS Code',
            description: 'Редактор кода для разработки веб-приложений.',
            image: '/images/mock/tools/vsc.png',
          },
          {
            title: 'Vitest',
            description: 'Среда тестирования на базе Vite.',
            image: '/images/mock/tools/vitest.png',
          },
          {
            title: 'Jest',
            description:
              'Фреймворк для тестирования JavaScript с акцентом на простоту.',
            image: '/images/mock/tools/jest.png',
          },
        ],
      },
    ],
    logo: '/images/mock/projects/ampi/logo.svg',
  },
  {
    id: 2,
    title: 'Лепнина',
    seo_url: 'lepnina',
    description:
      'Лепнина — это ведущий проект, специализирующийся на создании и установке декоративной лепнины. Наш сайт предоставляет полный спектр услуг для тех, кто хочет добавить элегантности и утонченности в интерьер своих домов, офисов и общественных помещений.',
    services: [
      {
        title: 'Разработка сайта',
        tools: [
          {
            title: 'VS Code',
            description: 'Редактор кода для разработки веб-приложений.',
            image: '/images/mock/tools/vsc.png',
          },
          {
            title: 'Vitest',
            description: 'Среда тестирования на базе Vite.',
            image: '/images/mock/tools/vitest.png',
          },
          {
            title: 'Jest',
            description:
              'Фреймворк для тестирования JavaScript с акцентом на простоту.',
            image: '/images/mock/tools/jest.png',
          },
        ],
      },
      {
        title: 'Фирменный дизайн',
        tools: [
          {
            title: 'VS Code',
            description: 'Редактор кода для разработки веб-приложений.',
            image: '/images/mock/tools/vsc.png',
          },
          {
            title: 'Vitest',
            description: 'Среда тестирования на базе Vite.',
            image: '/images/mock/tools/vitest.png',
          },
          {
            title: 'Jest',
            description:
              'Фреймворк для тестирования JavaScript с акцентом на простоту.',
            image: '/images/mock/tools/jest.png',
          },
        ],
      },
    ],
    logo: '/images/mock/projects/phoenix/logo.svg',
  },
  {
    id: 3,
    title: 'Service',
    seo_url: 'service',
    description:
      'Service — это современное мобильное приложение для доставки еды, работающее по всей России. Мы стремимся предоставить пользователям удобный, быстрый и качественный сервис, чтобы наслаждаться любимыми блюдами из лучших ресторанов, не выходя из дома.',
    services: [
      {
        title: 'Разработка сайта',
        tools: [
          {
            title: 'VS Code',
            description: 'Редактор кода для разработки веб-приложений.',
            image: '/images/mock/tools/vsc.png',
          },
          {
            title: 'Vitest',
            description: 'Среда тестирования на базе Vite.',
            image: '/images/mock/tools/vitest.png',
          },
          {
            title: 'Jest',
            description:
              'Фреймворк для тестирования JavaScript с акцентом на простоту.',
            image: '/images/mock/tools/jest.png',
          },
        ],
      },
      {
        title: 'DevOps',
        tools: [
          {
            title: 'VS Code',
            description: 'Редактор кода для разработки веб-приложений.',
            image: '/images/mock/tools/vsc.png',
          },
          {
            title: 'Vitest',
            description: 'Среда тестирования на базе Vite.',
            image: '/images/mock/tools/vitest.png',
          },
          {
            title: 'Jest',
            description:
              'Фреймворк для тестирования JavaScript с акцентом на простоту.',
            image: '/images/mock/tools/jest.png',
          },
        ],
      },
    ],
    logo: '/images/mock/projects/premier/logo.svg',
  },
  {
    id: 4,
    title: 'Shop',
    seo_url: 'shop',
    description:
      'Shop — это ведущий интернет-магазин, специализирующийся на продаже светильников, ламп и мебели. Мы предлагаем широкий ассортимент качественных товаров, которые помогут создать уют и стиль в вашем доме или офисе. Наша цель — предоставить покупателям продукцию от лучших производителей по доступным ценам и с максимальным удобством.',
    services: [
      {
        title: 'Разработка сайта',
        tools: [
          {
            title: 'VS Code',
            description: 'Редактор кода для разработки веб-приложений.',
            image: '/images/mock/tools/vsc.png',
          },
          {
            title: 'Vitest',
            description: 'Среда тестирования на базе Vite.',
            image: '/images/mock/tools/vitest.png',
          },
          {
            title: 'Jest',
            description:
              'Фреймворк для тестирования JavaScript с акцентом на простоту.',
            image: '/images/mock/tools/jest.png',
          },
        ],
      },
    ],
    logo: '/images/mock/projects/romatti/logo.svg',
  },
]

const search = ref('')
const selectedServices = ref<string[]>([])

const services = computed(() => {
  if (projects) {
    const uniqServiceTitle = Array.from(
      projects.reduce((set, element) => {
        element.services.forEach(service => {
          set.add(service.title)
        })
        return set
      }, new Set<string>())
    )
    return uniqServiceTitle
  } else return null
})
const filteredProjects = computed(() => {
  let filtered = projects

  // Фильтрация по выбранным направлениям
  if (selectedServices.value.length > 0) {
    const selectedLabelsSet = new Set(selectedServices.value)
    filtered = filtered.filter(project =>
      project.services.some(project => selectedLabelsSet.has(project.title))
    )
  }

  // Фильтрация по поисковому запросу
  if (search.value) {
    const searchQuery = search.value.toLowerCase()
    filtered = filtered.filter(profession =>
      profession.title.toLowerCase().includes(searchQuery)
    )
  }
  return filtered
})
const debouncedFilteredProjects = refDebounced(filteredProjects, 700)
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <ui-section class="project">
        <ui-h1>Проекты</ui-h1>
        <div class="filters">
          <el-input
            v-model="search"
            class="filters__item"
            placeholder="Название профессии"
            clearable
          >
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
          <el-select
            v-model="selectedServices"
            multiple
            collapse-tags
            collapse-tags-tooltip
            placeholder="Фильтр по направлениям"
            class="filters__item"
            clearable
          >
            <el-option
              v-for="item in services"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
        <transition name="swipe" mode="out-in">
          <transition-group
            v-if="filteredProjects && filteredProjects.length > 0"
            name="list"
            tag="div"
            class="wrapper visability-hover"
          >
            <project-card
              v-for="project in debouncedFilteredProjects"
              :key="project.id"
              :project="project"
              tags-type="services"
            />
          </transition-group>
          <ui-empty v-else> Проект не найден </ui-empty>
        </transition>
      </ui-section>
      <template #feedback>
        <app-request />
      </template>
    </nuxt-layout>
  </div>
</template>

<style scoped lang="scss">
.project {
  @apply container;
}
.wrapper {
  @apply relative grid grid-cols-1 gap-4;

  @media (min-width: theme('screens.lg')) {
    @apply grid-cols-2 gap-8;
  }
}
.filters {
  @apply mb-4 flex flex-col items-center gap-6 sm:flex-row;
  &__item {
    @apply w-full sm:w-[240px];
  }
}
</style>
