<script setup lang="ts">
import { FreeMode } from 'swiper/modules'

const team = [
  {
    id: 1,
    name: 'Евгений Облепихин',
    job_title: 'CPO',
    image:
      'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Иван Фронтов',
    job_title: 'CEO',
    image:
      'https://images.unsplash.com/photo-1584043720379-b56cd9199c94?q=80&w=3379&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Алексей Шарпов',
    job_title: 'CTO',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
</script>

<template>
  <ui-section>
    <ui-h2> Наша команда</ui-h2>
    <client-only>
      <template #fallback>
        <ui-skeleton class="h-[400px] w-full" />
      </template>
      <Swiper
        :modules="[FreeMode]"
        :space-between="20"
        :slides-per-view="1.5"
        :free-mode="true"
        :breakpoints="{
          1070: {
            freeMode: false,
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }"
      >
        <SwiperSlide v-for="person in team" :key="person.id">
          <div>
            <nuxt-img
              fit="fill"
              :placeholder="[150, 150, 20, 3]"
              format="webp"
              class="image"
              :src="person.image"
              :alt="person.name"
            />
            <p class="text-base font-semibold sm:text-lg">
              {{ person.name }} - {{ person.job_title }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </client-only>
  </ui-section>
</template>

<style scoped lang="scss">
.image {
  @apply mb-2 h-[350px] w-full rounded-lg object-cover object-top sm:h-[450px] xl:h-[400px];
}
</style>
