<script setup lang="ts">
// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – О нас`,
  description: `${name} — IT компания по разработке сайтов и мобильных приложений`,
})
defineOgImageComponent('main', {
  title: `${name} – О нас 👥`,
})
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <div class="container">
        <about-banner />
        <about-stages />
        <lazy-about-team />
        <lazy-about-statistics />
        <lazy-app-feedback />
      </div>
    </nuxt-layout>
  </div>
</template>

<style scoped lang="scss"></style>
