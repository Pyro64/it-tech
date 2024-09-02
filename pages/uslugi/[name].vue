<script setup lang="ts">
import type { ProjectCard } from '~/types/project.models'
import type { ServiceDetail } from '~/types/service.models'
import type { Breadcrumb, NavLink } from '~/types/ui.models'

const service: ServiceDetail = {
  id: 1,
  seo_url: 'razrabotka-sajta',
  text: `<p>В современном цифровом мире наличие качественного и функционального сайта является ключом к успешному бизнесу. Мы предлагаем комплексные услуги по разработке сайтов, которые помогут вашему бизнесу выделиться среди конкурентов и привлечь новых клиентов.</p>
    
    <h2>Почему важно иметь профессиональный сайт?</h2>
    <p>Сайт является лицом вашего бренда в интернете. Это первое, что видят ваши потенциальные клиенты, когда ищут информацию о вашем бизнесе. Качественный сайт не только повышает доверие к вашему бренду, но и помогает оптимизировать бизнес-процессы, улучшить обслуживание клиентов и увеличить продажи.</p>
    
    <h3>Преимущества нашей услуги</h3>
    <ul class="benefits">
        <li><strong>Индивидуальный подход:</strong> Мы разрабатываем сайты, которые точно соответствуют вашим бизнес-целям и требованиям.</li>
        <li><strong>Современный дизайн:</strong> Наши дизайнеры создадут уникальный и запоминающийся дизайн, который подчеркнет вашу уникальность.</li>
        <li><strong>Удобство использования:</strong> Мы разрабатываем сайты с интуитивно понятным интерфейсом, чтобы пользователи могли легко находить нужную информацию.</li>
        <li><strong>Оптимизация для поисковых систем:</strong> Все наши сайты оптимизированы для SEO, чтобы повысить их видимость в поисковых системах.</li>
        <li><strong>Адаптивность:</strong> Ваш сайт будет отлично выглядеть и работать на всех устройствах: от настольных компьютеров до смартфонов.</li>
    </ul>
    
    <h3>Процесс разработки</h3>
    <ol class="process">
        <li><strong>Анализ и планирование:</strong> На первом этапе мы изучаем ваш бизнес и ваши цели, чтобы разработать план проекта.</li>
        <li><strong>Дизайн:</strong> Наши дизайнеры создают макеты и прототипы, чтобы вы могли увидеть, как будет выглядеть ваш сайт.</li>
        <li><strong>Разработка:</strong> На этом этапе наши разработчики превращают дизайн в рабочий сайт, используя современные технологии.</li>
        <li><strong>Тестирование и запуск:</strong> Мы проводим тщательное тестирование сайта, чтобы убедиться в его корректной работе, и затем запускаем его в интернет.</li>
        <li><strong>Поддержка и обновление:</strong> После запуска мы продолжаем поддерживать сайт, чтобы он всегда оставался актуальным и безопасным.</li>
    </ol>

    <h3>Как мы можем вам помочь?</h3>
    <p>Наша команда готова воплотить в жизнь любые ваши идеи, от простых информационных сайтов до сложных интернет-магазинов и порталов. Мы гордимся нашими проектами и всегда стремимся превзойти ожидания наших клиентов.</p>`,
  title: 'Разработка сайта',
  banner: {
    image: '/images/mock/services/site/banner.jpg',
  },
  tools: [
    {
      title: 'React',
      description:
        'Библиотека, с помощью которой можно создавать пользовательские интерфейсы.',
      image: '/images/mock/tools/react.svg',
      link: 'https://react.dev/',
    },
    {
      title: 'TypeScript',
      description:
        'TypeScript — это строго типизированный язык программирования, построенный на JavaScript. Разработчики добавили в него дополнительные возможности, такие как статическая типизация, классы и модули, чтобы создавать более надежные и поддерживаемые программы.',
      image: '/images/mock/tools/typescript.svg',
      link: 'https://www.typescriptlang.org/',
    },
    {
      title: 'REST API',
      description:
        'Набор правил, которые определяют, как сервер обменивается данными c приложениями.',
      image: '/images/mock/tools/rest.png',
      link: 'https://ru.wikipedia.org/wiki/REST',
    },
    {
      title: 'C#',
      description:
        'C# (произносится си шарп) — объектно-ориентированный язык программирования общего назначения. Разработан в 1998—2001 годах группой инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота как язык разработки приложений для платформы Microsoft .NET Framework и .NET Core. Впоследствии был стандартизирован как ECMA-334 и ISO/IEC 23270.',
      image: '/images/mock/tools/c#.svg',
      link: 'https://dotnet.microsoft.com/ru-ru/languages/csharp',
    },
    {
      title: 'MudBlazor',
      description:
        'MudBlazor — это амбициозный компонентный фреймворк Material Design для Blazor, в котором особое внимание уделяется простоте использования и четкой структуре. Он идеально подходит для разработчиков .NET, которые хотят быстро создавать веб-приложения, не испытывая проблем с CSS и Javascript. MudBlazor, полностью написанный на C#, позволяет вам адаптировать, исправлять или расширять фреймворк. В документации есть множество примеров, что значительно упрощает понимание и изучение MudBlazor.',
      image: '/images/mock/tools/mudblazor.svg',
      link: 'https://mudblazor.com/',
    },
    {
      title: 'Next js',
      description: `Next.js — это популярный React-метафреймворк, который упрощает создание веб-приложений с отличной производительностью и хорошим SEO. Он поддерживает рендеринг на стороне сервера (SSR) и статическую генерацию (SSG), что позволяет страницам загружаться быстрее и индексироваться лучше поисковыми системами. Благодаря встроенной поддержке маршрутизации, оптимизации изображений и стилей, а также интеграции с API, Next.js подходит для создания динамических и высокопроизводительных веб-приложений.`,
      image: '/images/mock/tools/next-js.svg',
      link: 'https://nextjs.org/',
    },
  ],
  faq: [
    {
      title: 'Какой минимальный прайс на разработку сайта?',
      text: 'Цена начинается от 1 000 000 рублей',
    },
    {
      title: 'Сколько в среднем вы создаете лендинг сайт?',
      text: 'На разработку с готовым дизайном мы потратим 2 дня.',
    },
  ],
}
const projects: ProjectCard[] = [
  {
    id: 1,
    title: 'Ampi power',
    seo_url: 'ampi',
    description:
      'Ampi Power — это инновационный проект, предоставляющий услугу аренды пауэрбанков в Германии. Для удобства пользователей было разработано мобильное приложение и сайт, которые позволяют легко находить, арендовать и возвращать пауэрбанки.',
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
    title: 'Phoenix лепнина',
    seo_url: 'phoenix-lepnina',
    description:
      'Phoenix Лепнина — это ведущий проект, специализирующийся на создании и установке декоративной лепнины. Наш сайт предоставляет полный спектр услуг для тех, кто хочет добавить элегантности и утонченности в интерьер своих домов, офисов и общественных помещений.',
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
    logo: '/images/mock/projects/phoenix/logo.svg',
  },
  {
    id: 3,
    title: 'Premier Service',
    seo_url: 'premier-service',
    description:
      'Premier Service — это современное мобильное приложение для доставки еды, работающее по всей России. Мы стремимся предоставить пользователям удобный, быстрый и качественный сервис, чтобы наслаждаться любимыми блюдами из лучших ресторанов, не выходя из дома.',
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
    logo: '/images/mock/projects/premier/logo.svg',
  },
  {
    id: 4,
    title: 'Romatti',
    seo_url: 'romatti',
    description:
      'Romatti — это ведущий интернет-магазин, специализирующийся на продаже светильников, ламп и мебели. Мы предлагаем широкий ассортимент качественных товаров, которые помогут создать уют и стиль в вашем доме или офисе. Наша цель — предоставить покупателям продукцию от лучших производителей по доступным ценам и с максимальным удобством.',
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
// Навигация
const navPage: NavLink[] = [
  {
    name: 'Главная',
    href: '/',
  },
  {
    name: 'Услуги',
    href: '/uslugi',
  },
]
const breadcrumbs = computed<Breadcrumb[] | null>(() => {
  if (service) {
    return [
      ...navPage,
      {
        name: service.title,
      },
    ]
  } else {
    return null
  }
})

// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – ${service.title}`,
  description: `${name} — IT компания по разработке сайтов и мобильных приложений`,
})
defineOgImageComponent('main', {
  title: `${name} – ${service.title}`,
})
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <div class="container">
        <ui-breadcrumbs v-if="breadcrumbs" :breadcrumbs="breadcrumbs" />
        <div class="header">
          <ui-h1 class="!mb-0">{{ service.title }}</ui-h1>
          <ui-link
            :href="`/zayavka/?type=${service.seo_url}`"
            type="button"
            class="font-semibold"
          >
            Оставить заявку
          </ui-link>
        </div>
      </div>
      <service-banner :banner="service.banner" />
      <div class="container">
        <ui-section>
          <ui-h2>Используемые технологии</ui-h2>
          <div class="tools visability-hover">
            <tools-card
              v-for="tool in service.tools"
              :key="tool.link"
              :tool="tool"
            />
          </div>
        </ui-section>
        <ui-html class="mb-8" :html="service.text" />
        <ui-section>
          <ui-h2>Выполненые проекты</ui-h2>
          <div class="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-8">
            <project-card
              v-for="project in projects"
              :key="project.id"
              :project="project"
              tags-type="tools"
            />
          </div>
        </ui-section>
        <ui-section>
          <ui-h2>Популярные вопросы</ui-h2>
          <app-collapse class="shadow-card" :faq="service.faq" />
        </ui-section>
      </div>
      <template #feedback>
        <app-request />
      </template>
    </nuxt-layout>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply mb-8 flex flex-col items-start justify-between  gap-6;
  @media (min-width: theme('screens.sm')) {
    @apply flex-row items-center gap-8;
  }
}
.tools {
  @apply grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3;
}
</style>
