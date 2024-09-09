<script setup lang="ts">
import type { WebSite } from 'schema-dts'

const NuxtSchemaOrgDefinedTerm: WebSite = {
  '@type': 'WebSite',
  name: `${useSiteName()} – IT компания нового поколения.`,
  description: `${useSiteName()} —  IT компания нового поколения по созданию сайтов и мобильных приложений`,
  image: '/images/notebook-ittech.png',
  inLanguage: 'ru_RU',
}

useSchemaOrg([NuxtSchemaOrgDefinedTerm])
</script>

<template>
  <nuxt-layout name="default">
    <main class="main">
      <app-header v-once />
      <div class="content">
        <slot />
      </div>
      <div>
        <slot name="feedback" />
        <app-footer />
      </div>
    </main>
    <client-only>
      <lazy-ui-confirm-cookies />
      <lazy-ui-backtop />
    </client-only>
  </nuxt-layout>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  @apply flex flex-col justify-between;
  min-height: 100vh;
}

.content {
  @apply pt-[90px] md:pt-[160px];
  flex-grow: 1;
}
</style>
