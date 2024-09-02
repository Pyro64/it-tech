<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import type { NavLink } from '~/types/ui.models'

const global = useGlobalStore()
const { isMobile } = storeToRefs(global)
const { y } = useWindowScroll()

const isOpenNavigation = ref(false)
const isVisibleMenu = ref(true)

watch(y, (value, oldValue) => {
  if (value > oldValue) {
    isVisibleMenu.value = false
  }
  if (value < oldValue || y.value <= 0) {
    isVisibleMenu.value = true
  }
})

const links: NavLink[] = [
  {
    href: '/uslugi',
    name: 'Услуги',
  },
  {
    href: '/proekty',
    name: 'Проекты',
  },
  {
    href: '/zayavka',
    name: 'Заполнить брифинг',
  },
  {
    href: '/o-nas',
    name: 'О нас',
  },
  {
    href: '/kontakty',
    name: 'Контакты',
  },
]
</script>

<template>
  <header class="header" :class="[{ scroll: isVisibleMenu }]">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <app-logo />
        </div>
        <service-search v-if="!isMobile" />
        <user-avatar />
        <ui-burger @click="isOpenNavigation = true" />
      </div>
      <lazy-nav-mobile v-if="isMobile" v-model:isOpen="isOpenNavigation" />
      <div v-else class="header__menu">
        <div style="min-height: 0">
          <nav-page :links="links" />
        </div>
      </div>
    </div>
  </header>
  <lazy-user-drawer />
</template>

<style scoped lang="scss">
.header {
  @apply fixed z-10 grid  w-screen overflow-hidden py-[15px] shadow-sm shadow-slate-400 dark:shadow-black md:py-4;
  grid-template-columns: 100%;
  background: $semiBgColor;
  transition:
    grid-template-rows 0.5s ease-in-out,
    padding 0.5s ease-in-out,
    background theme('transitionDuration.DEFAULT')
      theme('transitionTimingFunction.custom');

  &__logo {
    @apply flex-grow;
  }

  &__inner {
    @apply flex items-center justify-between gap-6  md:gap-10;
  }

  &__menu {
    @apply hidden md:grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition:
      grid-template-rows 0.5s ease-in-out,
      margin 0.5s ease-in-out,
      border 0.38s ease-in-out;
    border-top: 0 solid $hintColor;
  }
}

.header.scroll {
  .header {
    &__menu {
      @apply mt-5;
      grid-template-rows: 1fr;
      border-top: 1px solid $hintColor;
    }
  }
}
</style>
