<script setup lang="ts">
import type { SignLink } from '~/types/auth.models'

const name = useSiteName()
useSeoMeta({
  title: `${name} – Авторизация`,
  description: 'Авторизация необходима просмотра личного кабинета',
})

defineOgImageComponent('main', {
  title: `${name} – Авторизация 🔐`,
})

const route = useRoute()
const redirectPath = useCookie('redirect')
const links: SignLink[] = [
  {
    src: '/auth/recovery',
    text: 'Восстановить',
    title: 'Забыли пароль?',
  },
]
if (route.redirectedFrom) {
  redirectPath.value = route.redirectedFrom.path
}
</script>

<template>
  <div>
    <nuxt-layout name="auth">
      <auth-title title="Авторизация" />
      <form-auth />
      <auth-links :links="links" />
    </nuxt-layout>
  </div>
</template>

<style lang="scss" scoped></style>
