<script setup lang="ts">
import type { NavLink } from '~/types/ui.models'

const model = defineModel<boolean>('isOpen', { required: true })

const target = useSwipeChange(model, 'right')

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
    href: '/vakansii',
    name: 'Вакансии',
  },
  {
    href: '/stati',
    name: 'Статьи',
  },
  {
    href: '/kontakty',
    name: 'Контакты',
  },
]
</script>

<template>
  <div ref="target">
    <el-drawer v-model="model" title="Навигация" size="80%">
      <nav-page :links="links" />
    </el-drawer>
  </div>
</template>

<style scoped lang="scss"></style>
