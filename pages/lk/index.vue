<script setup lang="ts">
// SEO настройки
const name = useSiteName()
useSeoMeta({
  title: `${name} – Личный кабинет`,
  description: `${name} — Личный кабинет`,
})

const links = [
  {
    href: 'https://www.notion.so/',
    name: 'Notion',
  },
  {
    href: 'https://web.telegram.org/',
    name: 'Рабочая группа',
  },
  {
    href: 'https://docs.google.com/',
    name: 'Техническое задание',
  },
  {
    href: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    name: 'Моковый pdf файл',
  },
]
</script>

<template>
  <div>
    <nuxt-layout name="main">
      <div class="container">
        <ui-section>
          <ui-h2>Полезные ссылки</ui-h2>
          <div class="flex flex-col gap-3 sm:gap-2">
            <ui-link
              v-for="link in links"
              :href="link.href"
              :key="link.href"
              type="primary"
              target="_blank"
              external
            >
              {{ link.name }}
            </ui-link>
          </div>
        </ui-section>
      </div>
    </nuxt-layout>
  </div>
</template>

<style scoped lang="scss"></style>
