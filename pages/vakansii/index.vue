<script setup lang="ts">
import type { VacancyCard } from '~/types/vacancy.models'

const global = useGlobalStore()
const { isMobile } = storeToRefs(global)

// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – Вакансии`,
  description: `${name} — IT компания по разработке сайтов и мобильных приложений`,
})
defineOgImageComponent('main', {
  title: `${name} – Вакансии`,
})

const vacansies: VacancyCard[] = [
  {
    id: 1,
    title: 'Фронтенд разработчик',
    min_salary: 30_000,
    max_salary: 150_000,
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
      {
        title: 'Vite',
        description:
          'Локальный сервер для разработки приложений на Vue. Поддерживает TypeScript и JSX.',
        image: '/images/mock/tools/vite.png',
      },
      {
        title: 'Webpack',
        description:
          'Инструмент, который позволяет собрать воедино разные модули JavaScript и оптимизировать исходный код.',
        image: '/images/mock/tools/webpack.png',
      },
      {
        title: 'Pinia',
        description:
          'Библиотека магазина и структура управления состоянием для Vue.js. Библиотеку используют в основном для создания интерфейсных веб-приложений.',
        image: '/images/mock/tools/pinia.png',
      },
      {
        title: 'Element Plus',
        description:
          'Библиотека компонентов на основе Vue 3 для дизайнеров и разработчиков.Этот сайт сделан при помощи этой библиотеки',
        image: '/images/mock/tools/element.png',
      },
    ],
    about: [
      {
        title: 'Описание компании',
        text: `<p>Мы — быстрорастущая IT-компания, специализирующаяся на разработке инновационных веб-приложений.
   Наша команда ищет талантливого Frontend React разработчика, который присоединится к нам и поможет реализовать
   захватывающие проекты.</p>`,
      },
      {
        title: 'Обязанности',
        text: `<ul>
            <li>Разработка и поддержка веб-приложений с использованием React.</li>
            <li>Сотрудничество с дизайнерской командой для реализации пользовательских интерфейсов.</li>
            <li>Оптимизация производительности приложений.</li>
            <li>Обеспечение высокого качества кода и следование современным практикам разработки.</li>
        </ul>`,
      },
      {
        title: 'Требования',
        text: `<ul>
            <li>Опыт работы с React от 2 лет.</li>
            <li>Хорошее знание JavaScript, HTML и CSS.</li>
            <li>Опыт работы с системами контроля версий, такими как Git.</li>
            <li>Понимание RESTful API и архитектуры клиент-сервер.</li>
            <li>Навыки решения проблем и внимание к деталям.</li>
        </ul>`,
      },
      {
        title: 'Преимущества',
        text: `<ul>
            <li>Работа в динамичной и дружной команде.</li>
            <li>Возможности для профессионального роста и развития.</li>
            <li>Гибкий график работы.</li>
            <li>Конкурентоспособная заработная плата.</li>
        </ul>`,
      },
    ],
    tags: ['Опыт 1-3 года', 'Можно удаленно'],
    link: 'https://saratov.hh.ru/vacancy/105105510?hhtmFrom=employer_vacancies',
  },
  {
    id: 2,
    title: 'Мобильный разработчик',
    min_salary: 30_000,
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
      {
        title: 'Vite',
        description:
          'Локальный сервер для разработки приложений на Vue. Поддерживает TypeScript и JSX.',
        image: '/images/mock/tools/vite.png',
      },
      {
        title: 'Webpack',
        description:
          'Инструмент, который позволяет собрать воедино разные модули JavaScript и оптимизировать исходный код.',
        image: '/images/mock/tools/webpack.png',
      },
      {
        title: 'Pinia',
        description:
          'Библиотека магазина и структура управления состоянием для Vue.js. Библиотеку используют в основном для создания интерфейсных веб-приложений.',
        image: '/images/mock/tools/pinia.png',
      },
      {
        title: 'Element Plus',
        description:
          'Библиотека компонентов на основе Vue 3 для дизайнеров и разработчиков.Этот сайт сделан при помощи этой библиотеки',
        image: '/images/mock/tools/element.png',
      },
    ],
    about: [
      {
        title: 'Описание компании',
        text: `<p>Мы — быстрорастущая IT-компания, специализирующаяся на разработке инновационных веб-приложений.
   Наша команда ищет талантливого Frontend React разработчика, который присоединится к нам и поможет реализовать
   захватывающие проекты.</p>`,
      },
      {
        title: 'Обязанности',
        text: `<ul>
            <li>Разработка и поддержка веб-приложений с использованием React.</li>
            <li>Сотрудничество с дизайнерской командой для реализации пользовательских интерфейсов.</li>
            <li>Оптимизация производительности приложений.</li>
            <li>Обеспечение высокого качества кода и следование современным практикам разработки.</li>
        </ul>`,
      },
      {
        title: 'Требования',
        text: `<ul>
            <li>Опыт работы с React от 2 лет.</li>
            <li>Хорошее знание JavaScript, HTML и CSS.</li>
            <li>Опыт работы с системами контроля версий, такими как Git.</li>
            <li>Понимание RESTful API и архитектуры клиент-сервер.</li>
            <li>Навыки решения проблем и внимание к деталям.</li>
        </ul>`,
      },
      {
        title: 'Преимущества',
        text: `<ul>
            <li>Работа в динамичной и дружной команде.</li>
            <li>Возможности для профессионального роста и развития.</li>
            <li>Гибкий график работы.</li>
            <li>Конкурентоспособная заработная плата.</li>
        </ul>`,
      },
    ],
    tags: ['Опыт 1-3 года', 'Можно удаленно'],
    link: 'https://saratov.hh.ru/vacancy/105105510?hhtmFrom=employer_vacancies',
  },
]
const isOpenModal = ref(false)

const openModal = () => {
  isOpenModal.value = true
}
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <div class="container">
        <ui-h1>Вакансии</ui-h1>
        <ui-section class="grid gap-6">
          <vacancy-card
            v-for="vacancy in vacansies"
            v-bind="vacancy"
            :key="vacancy.id"
            @open-modal="openModal"
          />
        </ui-section>
        <client-only>
          <lazy-el-drawer
            v-if="isMobile"
            v-model="isOpenModal"
            title="Отправить заявку"
            direction="btt"
            size="70%"
          >
            <form-feedback />
          </lazy-el-drawer>
          <lazy-el-dialog
            v-else
            v-model="isOpenModal"
            title="Отправить заявку"
            width="500"
          >
            <form-feedback />
          </lazy-el-dialog>
        </client-only>
      </div>
    </nuxt-layout>
  </div>
</template>

<style scoped lang="scss"></style>
