<script setup lang="ts">
// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – Контакты`,
  description: `${name} — IT компания по разработке сайтов и мобильных приложений`,
})
defineOgImageComponent('main', {
  title: `${name} – Контакты`,
})

type ContactLinks = {
  link: string
  text: string
  type: 'email' | 'phone'
}

const items: ContactLinks[] = [
  {
    link: 'trifonov.roman64@gmail.com',
    text: 'Общие вопросы',
    type: 'email',
  },
  {
    link: '+7 (987) 302-91-55',
    text: 'Телефон для связи',
    type: 'phone',
  },
  {
    link: '+7 (495) 222-21-51',
    text: 'Отдел заботы о пользователях',
    type: 'phone',
  },
]
const generateHref = (item: ContactLinks) => {
  switch (item.type) {
    case 'email':
      return `mailto:${item.link}`
    case 'phone':
      return `tel:${item.link}`
    default:
      return item.link
  }
}
const descriptions = [
  {
    title: 'На машине',
    text: `<p>Доехать до Москва-Сити на автомобиле можно по Третьему транспортному кольцу, Краснопресненской набережной и 1-му Красногвардейскому проезду.</p>
      <p>Если вы приехали на автомобиле и хотите оставить машину на территории Москва-Сити, на схеме можно найти общедоступные места. Всего для автомобилей в Москва-Сити предусмотрено более 15 тыс. парковочных мест в общедоступном подземном паркинге ТЦ «Афимолл Сити», в подземных паркингах и на наземных парковках башен и Novotel.</p>
      <p>С 22 октября сквозной проезд транспорта к некоторым башням стал недоступен. Для быстрой посадки и высадки пассажиров мы предусмотрели 13 зон кратковременной остановки «Kiss & Ridе» на 75 мест. Они расположены максимально близко ко входам в башни. Останавливаться в таких зонах можно не больше 5 минут.</p>
      `,
  },
  {
    title: 'Пешком',
    text: `<p>В Москва-Сити удобнее всего добираться на метро. Со станции "Выставочная" вы сразу попадете на 1 этаж торгового центра "Афимолл". Так же решается проблема пробок, столь характерных для Москвы в любое время суток, а также устраняется необходимость в длительном поиске места для парковки автомобиля.</p>
          <p>На территории Москва-Сити расположены станции метро "Выставочная", "Деловой центр" и "Международная", принадлежащие к разным линиям, но расположенные на малом расстоянии друг от друга. Поэтому добраться сюда на метро можно без пересадок почти из любой точки города. Это же позволяет выйти из подземки именно в той части делового центра, куда необходимо попасть, если времени на пешую прогулку и обозревание достопримечательностей квартала нет.</p>`,
  },
]
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <div class="container">
        <ui-h1>Контакты</ui-h1>
        <ui-section class="contacts">
          <div class="contacts__links">
            <div v-for="item in items" :key="item.link">
              <ui-link
                external
                :href="generateHref(item)"
                type="primary"
                class="contacts__link"
              >
                {{ item.link }}
              </ui-link>
              <p class="contacts__links-text">{{ item.text }}</p>
            </div>
          </div>
          <ui-h2 class="contacts__adress">
            Адрес: <span>Пресненская наб., 10, стр. 1, Москва</span>
          </ui-h2>
          <div class="mb-8 flex flex-col gap-4 md:flex-row">
            <div
              v-for="(description, index) in descriptions"
              :key="index"
              class="w-full md:w-1/2"
            >
              <h4 class="mb-2 text-2xl font-medium md:mb-4">
                {{ description.title }}
              </h4>
              <ui-html :html="description.text" />
            </div>
          </div>
          <div class="map">
            <nuxt-img
              fit="fill"
              :placeholder="[150, 150, 20, 3]"
              format="webp"
              src="/images/map.png"
              class="map__image"
            />
            <ui-link
              external
              type="button"
              target="_blank"
              class="map__link"
              href="https://yandex.ru/maps/213/moscow/?ll=37.538005%2C55.746277&mode=search&poi%5Bpoint%5D=37.535299%2C55.749588&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D65790466974&sctx=ZAAAAAgBEAAaKAoSCYnQCDauz0JAEabtX1lp4EtAEhIJbXU5JSBm%2Fz8RSDfCoiJO5j8iBgABAgMEBSgKOABAhZIHSAFqAnJ1nQHNzEw9oAEAqAEAvQGhynvIggIIc2tpbGxib3iKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=37.538005%2C55.746277&sspn=0.035933%2C0.013844&text=skillbox&z=16.31"
            >
              Яндекс карта
            </ui-link>
          </div>
        </ui-section>
        <app-feedback />
      </div>
    </nuxt-layout>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  &__links {
    @apply mb-10 flex flex-col items-start justify-between gap-3;
    @media (min-width: theme('screens.md')) {
      @apply flex-row items-center gap-0;
    }
    @media (min-width: theme('screens.lg')) {
      @apply mb-20;
    }
    &-text {
      @apply text-base sm:text-lg;
    }
  }
  &__link {
    @apply text-base font-medium sm:text-xl;
  }
  &__adress {
    @apply flex flex-col gap-2 md:flex-row md:items-center;
  }
}
.map {
  @apply relative h-[350px] w-full overflow-hidden rounded-lg sm:h-[500px] md:h-[600px];
  &__image {
    @apply absolute left-0 top-0 z-[-1] h-full w-full object-cover;
  }
  &__link {
    @apply absolute bottom-5 right-5;
  }
}
</style>
