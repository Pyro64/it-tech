<script setup lang="ts">
import type { ServiceCard } from '~/types/service.models'

// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – IT компания`,
  description: `${name} — IT компания по разработке сайтов и мобильных приложений`,
})

// store
const global = useGlobalStore()
const { isMobile } = storeToRefs(global)

// Open Graph настройки
defineOgImageComponent('main', {
  title: `${name} – Список услуг 📚`,
})

// Отслеживание мыши
const target = ref<HTMLDivElement | null>(null)

const services: ServiceCard[] = [
  {
    id: 1,
    svg: '/images/mock/services/svg/site.svg',
    title: 'Разработка сайта',
    seo_url: 'razrabotka-sajta',
    text: 'Мы создаем уникальные и профессиональные веб-сайты, которые не только привлекают внимание своей эстетикой, но и обеспечивают отличное пользовательское взаимодействие. Наши сайты адаптивны, удобны в управлении и оптимизированы для достижения лучших результатов в интернете.',
  },
  {
    id: 2,
    svg: '/images/mock/services/svg/design.svg',
    title: 'Фирменный дизайн',
    seo_url: 'firmennyj-dizajn',
    text: 'Предлагаем услуги по созданию индивидуального фирменного дизайна, включая разработку логотипов, визиток и других элементов брендинга. Наши дизайнерские решения помогут вашему бизнесу выделиться на фоне конкурентов и создать запоминающийся и привлекательный имидж.',
  },
  {
    id: 3,
    svg: '/images/mock/services/svg/mobile.svg',
    title: 'Мобильное приложение',
    seo_url: 'mobilnoe-prilozhenie',
    text: 'Специализируемся на разработке мобильных приложений для платформ iOS и Android. Мы создаем интуитивно понятные и высокофункциональные приложения, которые отвечают современным требованиям пользователей и помогают вашему бизнесу расширить свою аудиторию и улучшить взаимодействие с клиентами.',
  },
  {
    id: 4,
    svg: '/images/mock/services/svg/seo.svg',
    title: 'SEO продвижение',
    seo_url: 'seo-prodvizhenie',
    text: 'Проводим комплексное SEO-продвижение вашего сайта для повышения его видимости в поисковых системах. Мы используем современные методы и стратегии для оптимизации контента, улучшения структуры сайта и привлечения целевого трафика, чтобы увеличить количество посетителей и улучшить позиции в поисковой выдаче.',
  },
  {
    id: 5,
    svg: '/images/mock/services/svg/server.svg',
    title: 'DevOps',
    seo_url: 'devops',
    text: 'Обеспечиваем DevOps, включая настройку, мониторинг и техническую поддержку серверов. Мы гарантируем стабильную работу, безопасность и оптимальную производительность серверов, что обеспечивает надежное функционирование ваших веб-ресурсов и защиту данных от угроз.',
  },
  {
    id: 6,
    svg: '/images/mock/services/svg/crm.svg',
    title: 'CRM система',
    seo_url: 'crm-sistema',
    text: 'Разрабатываем и внедряем CRM-системы, которые автоматизируют управление клиентами и улучшают процессы продаж. Наша CRM поможет вам эффективно отслеживать взаимодействие с клиентами, оптимизировать рабочие процессы и повысить уровень сервиса и удовлетворенности клиентов.',
  },
]
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <div class="container">
        <ui-section>
          <ui-h1>Услуги</ui-h1>
          <div ref="target" class="w-full">
            <div class="wrapper">
              <service-card
                v-for="item in services"
                :key="item.id"
                :item="item"
                class="animate"
              />
            </div>
          </div>
        </ui-section>
      </div>
      <animated-circle v-if="!isMobile" :target="target" />
      <template #feedback>
        <app-request />
      </template>
    </nuxt-layout>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply grid gap-4 sm:grid-cols-2;

  @media (min-width: theme('screens.lg')) {
    @apply grid-cols-3 gap-8;
  }
}
</style>
