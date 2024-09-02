<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper/modules'
import type { ServiceProjectDesign } from '~/types/service.models'

const props = defineProps<ServiceProjectDesign>()
</script>

<template>
  <ui-section :id="props.anchor_link">
    <ui-h2> {{ props.name }}</ui-h2>
    <div class="about">
      <div>
        <ui-h3>Шрифты</ui-h3>
        <div class="flex flex-col gap-2">
          <div v-for="el in props.fonts" :key="el.id">
            <p
              class="leading-tight"
              :style="{
                fontSize: `${el.size}px`,
                fontWeight: el.weight,
                fontFamily: `${el.font}, sans-serif`,
              }"
            >
              {{ el.font }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <ui-h3>Основные цвета</ui-h3>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="color in props.colors"
            :key="color"
            class="flex items-center gap-2"
          >
            <div :style="{ background: color }" class="box" />
            <div>{{ color }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-8">
      <ui-h3>Галерея</ui-h3>
      <Swiper
        :modules="[Autoplay, Pagination]"
        :pagination="{
          type: 'progressbar',
        }"
        :autoplay="{
          delay: 1000,
          disableOnInteraction: true,
        }"
        :speed="600"
        :space-between="20"
        :slides-per-view="0.5"
        :breakpoints="{
          620: {
            slidesPerView: 1,
          },
          1070: {
            autoplay: {
              delay: 1500,
              pauseOnMouseEnter: true,
            },
            grabCursor: true,
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
        }"
      >
        <SwiperSlide v-for="image in props.images" :key="image">
          <nuxt-img
            class="image"
            fit="fill"
            :placeholder="[150, 150, 20, 3]"
            format="webp"
            :src="image"
            alt="Изображение галереи"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <ui-html v-if="props.text" :html="props.text" />
  </ui-section>
</template>

<style scoped lang="scss">
.about {
  @apply mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4;
}
.image {
  object-position: top;
  object-fit: cover;
  width: 100%;
  height: 350px;
}
.box {
  @apply h-8 w-8 rounded sm:h-10 sm:w-10;
}
</style>
