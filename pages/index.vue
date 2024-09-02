<script setup lang="ts">
// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – Главная страница`,
  description: `${name} — IT компания по разработке сайтов и мобильных приложений`,
})
defineOgImageComponent('main', {
  title: `${name} – Главная страница 👋`,
})
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <div class="container">
        <home-banner />
        <about-stages />
        <company-preview />
        <lazy-app-feedback />
      </div>
    </nuxt-layout>
  </div>
</template>

<style scoped lang="scss"></style>
