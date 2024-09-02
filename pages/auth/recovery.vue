<script setup lang="ts">
import type { SignLink } from '~/types/auth.models'

const name = useSiteName()
useSeoMeta({
  title: `${name} – Восстановление пароля`,
  description: 'Восстановление пароля для доступа к своему аккаунту',
})

defineOgImageComponent('main', {
  title: `${name} – Восстановление пароля 🔐`,
})

const links: SignLink[] = [
  {
    src: '/auth',
    text: 'Назад',
    title: '',
  },
]
</script>

<template>
  <div>
    <nuxt-layout name="auth">
      <auth-title title="Восстановление пароля" />
      <form-recovery />
      <auth-links :links="links" />
    </nuxt-layout>
  </div>
</template>

<style lang="scss" scoped></style>
