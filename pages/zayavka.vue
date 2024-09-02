<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
import { EffectFade, EffectCreative } from 'swiper/modules'
import {
  LazyBidFormSite,
  LazyBidFormSeo,
  LazyBidFormDesign,
  LazyBidFormMobile,
  LazyBidFormCrm,
  LazyBidFormDevops,
} from '#components'
import 'swiper/css/effect-fade'
import type { ServiceTypeKeys } from '~/types/service.models'

const modules = [EffectFade, EffectCreative]

const bid = useBidStore()
const { bidInfo, swiperRef } = storeToRefs(bid)

// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – Брифинг`,
  description: `${name} — IT компания по разработке сайтов и мобильных приложений`,
})
defineOgImageComponent('main', {
  title: `${name} – Брифинг`,
})

const formComponents: Record<ServiceTypeKeys, Component> = {
  site: LazyBidFormSite,
  design: LazyBidFormDesign,
  crm: LazyBidFormCrm,
  mobile: LazyBidFormMobile,
  seo: LazyBidFormSeo,
  devops: LazyBidFormDevops,
}

onBeforeRouteLeave((to, from, next) => {
  if (
    confirm(
      'Вы уверены, что хотите покинуть страницу? Несохраненные изменения могут быть потеряны.'
    )
  ) {
    next() // Разрешаем переход
  } else {
    next(false) // Отменяем переход
  }
})
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <div class="container">
        <ui-h1>Брифинг</ui-h1>
        <ui-section ref="swiperRef" class="shadow-card">
          <swiper
            :allow-touch-move="false"
            :simulate-touch="false"
            :modules="modules"
            :effect="'creative'"
            :slides-per-view="1"
            :observer="true"
            :observe-parents="true"
            :auto-height="true"
            :speed="500"
            :creative-effect="{
              prev: {
                translate: [0, 0, -400],
                opacity: 0,
              },
              next: {
                translate: [0, '200%', 0],
                opacity: 0,
              },
            }"
          >
            <swiper-slide class="slide">
              <bid-form-info />
            </swiper-slide>
            <swiper-slide
              v-for="form in bidInfo.services"
              :key="form"
              class="slide"
            >
              <component :is="formComponents[form]" />
            </swiper-slide>
          </swiper>
          <bid-price />
        </ui-section>
      </div>
    </nuxt-layout>
  </div>
</template>

<style lang="scss">
.bid {
  @apply grid grid-cols-1 gap-3 xl:grid-cols-2 xl:gap-10;
}
</style>

<style scoped lang="scss">
.slide {
  @apply p-[1px];
}
</style>
