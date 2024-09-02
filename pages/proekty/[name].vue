<script setup lang="ts">
import type { Component } from 'vue'
import {
  LazyServiceKindDesign,
  LazyServiceKindSite,
  LazyServiceKindMobile,
  LazyServiceKindCrm,
  LazyServiceKindDevops,
  LazyServiceKindSeo,
} from '#components'

import type { ProjectDetail } from '~/types/project.models'
import type { ServiceTypeKeys } from '~/types/service.models'
import type { Anchor, Breadcrumb, NavLink } from '~/types/ui.models'

// store
const global = useGlobalStore()
const { isMobile } = storeToRefs(global)

const services = {
  seo: {
    name: 'SEO оптимизация',
    text: `<h3>Мы разработали современный, удобный и функциональный сайт для продажи картин и лепных изделий.</h3>
    <p>Сайт выполнен на React JS / Next JS с использованием TypeScript и интегрирован с бэкендом через REST API на C#.</p>

    <p>Сайт предлагает широкий ассортимент товаров, включая картины и лепные изделия. Пользователи могут легко найти нужный товар благодаря удобному поиску по ключевым словам.</p>

    <p>На сайте реализована корзина для покупок, позволяющая добавлять товары в корзину и оформлять заказ. Также доступен выбор способа оплаты и доставки. Для зарегистрированных пользователей предусмотрен личный кабинет, где можно отслеживать заказы и историю покупок.</p>

    <p>Для обеспечения безопасности данных пользователей и защиты от несанкционированного доступа были приняты все необходимые меры.</p>

    <h3>Основные функции сайта:</h3>
    <ul>
      <li>каталог товаров;</li>
      <li>корзина;</li>
      <li>поиск;</li>
      <li>оформление заказа;</li>
      <li>личный кабинет;</li>
      <li>контакты;</li>
      <li>блог;</li>
      <li>отзывы;</li>
      <li>поддержка.</li>
    </ul>`,
    anchor_link: 'seo-optimizaciya',
    data: [
      {
        value: 430,
        label: '11.08.2024',
      },
      {
        value: 498,
        label: '10.08.2024',
      },
      {
        value: 553,
        label: '9.08.2024',
      },
      {
        value: 600,
        label: '8.08.2024',
      },
      {
        value: 730,
        label: '7.08.2024',
      },
      {
        value: 830,
        label: '6.08.2024',
      },
      {
        value: 880,
        label: '5.08.2024',
      },
      {
        value: 900,
        label: '4.08.2024',
      },
      {
        value: 950,
        label: '3.08.2024',
      },
      {
        value: 1000,
        label: '1.08.2024',
      },
    ],
  },
  site: {
    name: 'Разработка сайта',
    text: `<h3>Мы разработали современный, удобный и функциональный сайт для продажи картин и лепных изделий.</h3>
    <p>Сайт выполнен на React JS / Next JS с использованием TypeScript и интегрирован с бэкендом через REST API на C#.</p>

    <p>Сайт предлагает широкий ассортимент товаров, включая картины и лепные изделия. Пользователи могут легко найти нужный товар благодаря удобному поиску по ключевым словам.</p>

    <p>На сайте реализована корзина для покупок, позволяющая добавлять товары в корзину и оформлять заказ. Также доступен выбор способа оплаты и доставки. Для зарегистрированных пользователей предусмотрен личный кабинет, где можно отслеживать заказы и историю покупок.</p>

    <p>Для обеспечения безопасности данных пользователей и защиты от несанкционированного доступа были приняты все необходимые меры.</p>

    <h3>Основные функции сайта:</h3>
    <ul>
      <li>каталог товаров;</li>
      <li>корзина;</li>
      <li>поиск;</li>
      <li>оформление заказа;</li>
      <li>личный кабинет;</li>
      <li>контакты;</li>
      <li>блог;</li>
      <li>отзывы;</li>
      <li>поддержка.</li>
    </ul>`,
    anchor_link: 'rajreabotka-saitov',
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
      {
        title: 'Eslint',
        description: 'Инструмент для анализа кода на JavaScript.',
        image: '/images/mock/tools/eslint.png',
      },
      {
        title: 'Sass',
        description:
          'Метаязык на основе CSS, с помощью которого можно писать более упрощённый код для таблиц стилей.',
        image: '/images/mock/tools/sass.png',
      },
      {
        title: 'Emmet',
        description:
          'Плагины для текстовых редакторов, которые помогают быстрее писать код на HTML и других языках.',
        image: '/images/mock/tools/emmet.png',
      },
      {
        title: 'Lighthouse',
        description:
          'Инструмент, с помощью которого можно проанализировать веб-страницы, отследить эффективность ресурсов, проверить доступность, совместимость и при необходимости улучшать их качество.',
        image: '/images/mock/tools/lighthouse.png',
      },
      {
        title: 'HTML',
        description:
          'Язык, с помощью которого можно «разметить» структуру будущей веб-страницы: добавить основные блоки, текст, картинки, видео.',
        image: '/images/mock/tools/html.png',
      },
      {
        title: 'GitLab',
        description:
          'Система контроля версий, с помощью которой разработчики отслеживают изменения в коде и совместно работают над проектом',
        image: '/images/mock/tools/gitlab.png',
      },
      {
        title: 'GitHub',
        description: 'Сервис для совместной разработки проектов.',
        image: '/images/mock/tools/github.png',
      },
      {
        title: 'Vue 3.0',
        description:
          'Фреймворк — набор готового кода, с помощью которого можно создавать пользовательские интерфейсы.',
        image: '/images/mock/tools/vue.png',
      },
      {
        title: 'React',
        description:
          'Библиотека, с помощью которой можно создавать пользовательские интерфейсы.',
        image: '/images/mock/tools/react.png',
      },
      {
        title: 'TypeScript',
        description:
          'TypeScript — это строго типизированный язык программирования, построенный на JavaScript. Разработчики добавили в него дополнительные возможности, такие как статическая типизация, классы и модули, чтобы создавать более надежные и поддерживаемые программы.',
        image: '/images/mock/tools/typescript.png',
      },
      {
        title: 'JavaScript',
        description: 'Язык программирования, на котором пишут веб-приложения.',
        image: '/images/mock/tools/javascript.png',
      },
      {
        title: 'REST API',
        description:
          'Набор правил, которые определяют, как сервер обменивается данными c приложениями.',
        image: '/images/mock/tools/rest.png',
      },
      {
        title: 'CSS',
        description:
          'Язык стилей, с помощью которого можно описать внешний вид HTML-элементов.',
        image: '/images/mock/tools/css.png',
      },
      {
        title: 'Figma',
        description:
          'Сервис, в котором дизайнеры проектируют интерфейсы сайтов и мобильных приложений.',
        image: '/images/mock/tools/figma.png',
      },
      {
        title: 'Chrome DevTools',
        description:
          'Сервис, в котором дизайнеры проектируют интерфейсы сайтов и мобильных приложений.',
        image: '/images/mock/tools/devtools.png',
      },
    ],
    info: [
      {
        title: 'На какой версии next js был сделан проект?',
        text: '14.3 версия в app директорией',
      },
      {
        title: 'За сколько времени был сверстан проект?',
        text: 'Мы смогли сделать верстку(включая адаптив) за один месяц',
      },
      {
        title: 'Сколько человек принимало участие в разработке?',
        text: 'Всего принимало участие 5 человек',
      },
      {
        title:
          'Вы использвали unit тестирование в это проекте? Если да, то какую библиотеку вы использовали?',
        text: 'Мы использовали на фронтенде jest',
      },
    ],
  },
  design: {
    name: 'Фирменный дизайн',
    text: `<h3>Мы разработали современный, удобный и функциональный сайт для продажи картин и лепных изделий.</h3>
            <p>Дизайн проекта Phoenix представляет собой интернет-магазин, специализирующийся на продаже лепнины. Главная страница сайта выполнена в светлых тонах с акцентом на качественные фотографии продукции. В верхней части страницы расположены логотип компании и кнопки для входа в личный кабинет и корзину. Ниже находится баннер с текущими акциями и предложениями.</p>
            <p>Каталог товаров представлен в виде удобной навигации с возможностью фильтрации по различным параметрам, таким как материал, стиль, цвет и цена. Каждая карточка товара содержит подробное описание, фотографии с различных ракурсов и возможность добавления в корзину.</p>
            <p>Для удобства пользователей предусмотрена система поиска по сайту, которая позволяет быстро найти нужный товар. Также на сайте есть раздел с полезными статьями и советами по выбору и использованию лепнины.</p>
            <p>Дизайн сайта выполнен с учетом современных тенденций в веб-дизайне и обеспечивает комфортное использование для посетителей.</p>
            `,
    anchor_link: 'dizajn',
    fonts: [
      {
        id: 1,
        font: 'Bebas Neue',
        weight: 600,
        size: 52,
      },
      {
        id: 2,
        font: 'Gilroy',
        weight: 400,
        size: 24,
      },
    ],
    colors: ['#E33419', '#242424', '#FFAE1D'],
    images: [
      '/images/mock/projects/phoenix/1.png',
      '/images/mock/projects/phoenix/2.png',
      '/images/mock/projects/phoenix/3.png',
      '/images/mock/projects/phoenix/4.png',
      '/images/mock/projects/phoenix/5.png',
    ],
  },
  crm: {
    name: 'CRM система',
    text: `<h3>Мы разработали современный, удобный и функциональный сайт для продажи картин и лепных изделий.</h3>
    <p>Сайт выполнен на React JS / Next JS с использованием TypeScript и интегрирован с бэкендом через REST API на C#.</p>

    <p>Сайт предлагает широкий ассортимент товаров, включая картины и лепные изделия. Пользователи могут легко найти нужный товар благодаря удобному поиску по ключевым словам.</p>

    <p>На сайте реализована корзина для покупок, позволяющая добавлять товары в корзину и оформлять заказ. Также доступен выбор способа оплаты и доставки. Для зарегистрированных пользователей предусмотрен личный кабинет, где можно отслеживать заказы и историю покупок.</p>

    <p>Для обеспечения безопасности данных пользователей и защиты от несанкционированного доступа были приняты все необходимые меры.</p>

    <h3>Основные функции сайта:</h3>
    <ul>
      <li>каталог товаров;</li>
      <li>корзина;</li>
      <li>поиск;</li>
      <li>оформление заказа;</li>
      <li>личный кабинет;</li>
      <li>контакты;</li>
      <li>блог;</li>
      <li>отзывы;</li>
      <li>поддержка.</li>
    </ul>`,
    anchor_link: 'crm-sistema',
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
      {
        title: 'Eslint',
        description: 'Инструмент для анализа кода на JavaScript.',
        image: '/images/mock/tools/eslint.png',
      },
      {
        title: 'Sass',
        description:
          'Метаязык на основе CSS, с помощью которого можно писать более упрощённый код для таблиц стилей.',
        image: '/images/mock/tools/sass.png',
      },
      {
        title: 'Emmet',
        description:
          'Плагины для текстовых редакторов, которые помогают быстрее писать код на HTML и других языках.',
        image: '/images/mock/tools/emmet.png',
      },
      {
        title: 'Lighthouse',
        description:
          'Инструмент, с помощью которого можно проанализировать веб-страницы, отследить эффективность ресурсов, проверить доступность, совместимость и при необходимости улучшать их качество.',
        image: '/images/mock/tools/lighthouse.png',
      },
      {
        title: 'HTML',
        description:
          'Язык, с помощью которого можно «разметить» структуру будущей веб-страницы: добавить основные блоки, текст, картинки, видео.',
        image: '/images/mock/tools/html.png',
      },
      {
        title: 'GitLab',
        description:
          'Система контроля версий, с помощью которой разработчики отслеживают изменения в коде и совместно работают над проектом',
        image: '/images/mock/tools/gitlab.png',
      },
      {
        title: 'GitHub',
        description: 'Сервис для совместной разработки проектов.',
        image: '/images/mock/tools/github.png',
      },
      {
        title: 'Vue 3.0',
        description:
          'Фреймворк — набор готового кода, с помощью которого можно создавать пользовательские интерфейсы.',
        image: '/images/mock/tools/vue.png',
      },
      {
        title: 'React',
        description:
          'Библиотека, с помощью которой можно создавать пользовательские интерфейсы.',
        image: '/images/mock/tools/react.png',
      },
      {
        title: 'TypeScript',
        description:
          'TypeScript — это строго типизированный язык программирования, построенный на JavaScript. Разработчики добавили в него дополнительные возможности, такие как статическая типизация, классы и модули, чтобы создавать более надежные и поддерживаемые программы.',
        image: '/images/mock/tools/typescript.png',
      },
      {
        title: 'JavaScript',
        description: 'Язык программирования, на котором пишут веб-приложения.',
        image: '/images/mock/tools/javascript.png',
      },
      {
        title: 'REST API',
        description:
          'Набор правил, которые определяют, как сервер обменивается данными c приложениями.',
        image: '/images/mock/tools/rest.png',
      },
      {
        title: 'CSS',
        description:
          'Язык стилей, с помощью которого можно описать внешний вид HTML-элементов.',
        image: '/images/mock/tools/css.png',
      },
      {
        title: 'Figma',
        description:
          'Сервис, в котором дизайнеры проектируют интерфейсы сайтов и мобильных приложений.',
        image: '/images/mock/tools/figma.png',
      },
      {
        title: 'Chrome DevTools',
        description:
          'Сервис, в котором дизайнеры проектируют интерфейсы сайтов и мобильных приложений.',
        image: '/images/mock/tools/devtools.png',
      },
    ],
    info: [
      {
        title: 'На какой версии next js был сделан проект?',
        text: '14.3 версия в app директорией',
      },
      {
        title: 'За сколько времени был сверстан проект?',
        text: 'Мы смогли сделать верстку(включая адаптив) за один месяц',
      },
      {
        title: 'Сколько человек принимало участие в разработке?',
        text: 'Всего принимало участие 5 человек',
      },
      {
        title:
          'Вы использвали unit тестирование в это проекте? Если да, то какую библиотеку вы использовали?',
        text: 'Мы использовали на фронтенде jest',
      },
    ],
  },
  mobile: {
    name: 'Мобильные приложения',
    text: `<h3>Мы разработали современный, удобный и функциональный сайт для продажи картин и лепных изделий.</h3>
    <p>Сайт выполнен на React JS / Next JS с использованием TypeScript и интегрирован с бэкендом через REST API на C#.</p>

    <p>Сайт предлагает широкий ассортимент товаров, включая картины и лепные изделия. Пользователи могут легко найти нужный товар благодаря удобному поиску по ключевым словам.</p>

    <p>На сайте реализована корзина для покупок, позволяющая добавлять товары в корзину и оформлять заказ. Также доступен выбор способа оплаты и доставки. Для зарегистрированных пользователей предусмотрен личный кабинет, где можно отслеживать заказы и историю покупок.</p>

    <p>Для обеспечения безопасности данных пользователей и защиты от несанкционированного доступа были приняты все необходимые меры.</p>

    <h3>Основные функции сайта:</h3>
    <ul>
      <li>каталог товаров;</li>
      <li>корзина;</li>
      <li>поиск;</li>
      <li>оформление заказа;</li>
      <li>личный кабинет;</li>
      <li>контакты;</li>
      <li>блог;</li>
      <li>отзывы;</li>
      <li>поддержка.</li>
    </ul>`,
    anchor_link: 'mobilnoe-prilozhenie',
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
      {
        title: 'Eslint',
        description: 'Инструмент для анализа кода на JavaScript.',
        image: '/images/mock/tools/eslint.png',
      },
      {
        title: 'Sass',
        description:
          'Метаязык на основе CSS, с помощью которого можно писать более упрощённый код для таблиц стилей.',
        image: '/images/mock/tools/sass.png',
      },
      {
        title: 'Emmet',
        description:
          'Плагины для текстовых редакторов, которые помогают быстрее писать код на HTML и других языках.',
        image: '/images/mock/tools/emmet.png',
      },
      {
        title: 'Lighthouse',
        description:
          'Инструмент, с помощью которого можно проанализировать веб-страницы, отследить эффективность ресурсов, проверить доступность, совместимость и при необходимости улучшать их качество.',
        image: '/images/mock/tools/lighthouse.png',
      },
      {
        title: 'HTML',
        description:
          'Язык, с помощью которого можно «разметить» структуру будущей веб-страницы: добавить основные блоки, текст, картинки, видео.',
        image: '/images/mock/tools/html.png',
      },
      {
        title: 'GitLab',
        description:
          'Система контроля версий, с помощью которой разработчики отслеживают изменения в коде и совместно работают над проектом',
        image: '/images/mock/tools/gitlab.png',
      },
      {
        title: 'GitHub',
        description: 'Сервис для совместной разработки проектов.',
        image: '/images/mock/tools/github.png',
      },
      {
        title: 'Vue 3.0',
        description:
          'Фреймворк — набор готового кода, с помощью которого можно создавать пользовательские интерфейсы.',
        image: '/images/mock/tools/vue.png',
      },
      {
        title: 'React',
        description:
          'Библиотека, с помощью которой можно создавать пользовательские интерфейсы.',
        image: '/images/mock/tools/react.png',
      },
      {
        title: 'TypeScript',
        description:
          'TypeScript — это строго типизированный язык программирования, построенный на JavaScript. Разработчики добавили в него дополнительные возможности, такие как статическая типизация, классы и модули, чтобы создавать более надежные и поддерживаемые программы.',
        image: '/images/mock/tools/typescript.png',
      },
      {
        title: 'JavaScript',
        description: 'Язык программирования, на котором пишут веб-приложения.',
        image: '/images/mock/tools/javascript.png',
      },
      {
        title: 'REST API',
        description:
          'Набор правил, которые определяют, как сервер обменивается данными c приложениями.',
        image: '/images/mock/tools/rest.png',
      },
      {
        title: 'CSS',
        description:
          'Язык стилей, с помощью которого можно описать внешний вид HTML-элементов.',
        image: '/images/mock/tools/css.png',
      },
      {
        title: 'Figma',
        description:
          'Сервис, в котором дизайнеры проектируют интерфейсы сайтов и мобильных приложений.',
        image: '/images/mock/tools/figma.png',
      },
      {
        title: 'Chrome DevTools',
        description:
          'Сервис, в котором дизайнеры проектируют интерфейсы сайтов и мобильных приложений.',
        image: '/images/mock/tools/devtools.png',
      },
    ],
    info: [
      {
        title: 'На какой версии next js был сделан проект?',
        text: '14.3 версия в app директорией',
      },
      {
        title: 'За сколько времени был сверстан проект?',
        text: 'Мы смогли сделать верстку(включая адаптив) за один месяц',
      },
      {
        title: 'Сколько человек принимало участие в разработке?',
        text: 'Всего принимало участие 5 человек',
      },
      {
        title:
          'Вы использвали unit тестирование в это проекте? Если да, то какую библиотеку вы использовали?',
        text: 'Мы использовали на фронтенде jest',
      },
    ],
  },
  devops: {
    name: 'Серверные мощности',
    text: 'В рамках оптимизации удалось уменьшить нагрузку на сервер',
    anchor_link: 'servernye-moshnosti',
    data: [
      {
        value: 1000,
        label: '1.08.2024',
      },
      {
        value: 950,
        label: '3.08.2024',
      },
      {
        value: 900,
        label: '4.08.2024',
      },
      {
        value: 880,
        label: '5.08.2024',
      },
      {
        value: 830,
        label: '6.08.2024',
      },
      {
        value: 730,
        label: '7.08.2024',
      },
      {
        value: 600,
        label: '8.08.2024',
      },
      {
        value: 553,
        label: '9.08.2024',
      },
      {
        value: 498,
        label: '10.08.2024',
      },
      {
        value: 430,
        label: '11.08.2024',
      },
    ],
  },
}

const project: ProjectDetail = {
  id: 1,
  description:
    'Phoenix Лепнина — это ведущий проект, специализирующийся на создании и установке декоративной лепнины. Наш сайт предоставляет полный спектр услуг для тех, кто хочет добавить элегантности и утонченности в интерьер своих домов, офисов и общественных помещений.',
  image: '/images/mock/projects/phoenix/banner.png',
  logo: '/images/mock/projects/phoenix/logo.svg',
  seo_url: 'phoenix-lepnina',
  title: 'Phoenix-лепнина',
  links: [
    {
      name: 'Ссылка на сайт',
      href: 'https://phoenix-stucco.com',
    },
  ],
}

// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – ${project.title}`,
  description: `${name} — IT компания по разработке сайтов и мобильных приложений`,
})
defineOgImageComponent('main', {
  title: `${name} – Брифинг`,
})

// Навигация
const navPage: NavLink[] = [
  {
    name: 'Главная',
    href: '/',
  },
  {
    name: 'Проекты',
    href: '/proekty',
  },
]
const breadcrumbs = computed<Breadcrumb[] | null>(() => {
  if (services) {
    return [
      ...navPage,
      {
        name: project.title,
      },
    ]
  } else {
    return null
  }
})

// Рендер Услуг
const serviceComponents: Record<ServiceTypeKeys, Component> = {
  site: LazyServiceKindSite,
  crm: LazyServiceKindCrm,
  design: LazyServiceKindDesign,
  mobile: LazyServiceKindMobile,
  seo: LazyServiceKindSeo,
  devops: LazyServiceKindDevops,
}
const servicesComputed = computed(() => {
  if (services) {
    const renderableServices = Object.entries(services)
      .filter(([_, value]) => value !== null)
      .map(([key]) => ({
        component: serviceComponents[key as ServiceTypeKeys],
        data: services[key as ServiceTypeKeys],
      }))

    const servicesAnchorLinks: Anchor[] = Object.values(services)
      .filter(service => service !== null)
      .map(e => ({
        name: e.name,
        href: e.anchor_link,
      }))
    return { renderableServices, servicesAnchorLinks }
  } else {
    return null
  }
})
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <ui-breadcrumbs
        v-if="breadcrumbs"
        :breadcrumbs="breadcrumbs"
        class="container"
      />
      <project-banner v-if="project" :project="project" />

      <div class="container">
        <template v-if="servicesComputed">
          <component
            :is="service.component"
            v-for="(service, index) in servicesComputed.renderableServices"
            :key="index"
            v-bind="service.data"
          />
        </template>
      </div>
      <template
        v-if="
          servicesComputed && servicesComputed.servicesAnchorLinks.length > 1
        "
      >
        <lazy-anchor-mobile
          v-if="isMobile"
          :anchor-links="servicesComputed.servicesAnchorLinks"
        />
        <lazy-anchor-line
          v-else
          :anchor-links="servicesComputed.servicesAnchorLinks"
          class="hidden md:block"
        />
      </template>
    </nuxt-layout>
  </div>
</template>

<style scoped lang="scss"></style>
