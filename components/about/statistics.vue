<script setup lang="ts">
const statistic = ref([
  {
    number: 10,
    text: 'Проектов запущено',
  },
  {
    number: 30,
    text: 'Человек в штате по всей России',
  },
  {
    number: 120_000,
    text: `строк кода написано в 2024 году`,
  },
  {
    number: 216,
    text: `Завершенных задач`,
  },
  {
    number: 45_000,
    text: 'пользователей активно используют наши продукты',
  },
  {
    number: 5_000,
    text: 'часов поддержки предоставлено нашим клиентам',
  },
])
</script>

<template>
  <ui-section>
    <ui-h2>Cтатистика</ui-h2>
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div v-for="(item, index) in statistic" :key="index">
        <about-statistics-item :value="item.number" :text="item.text" />
      </div>
    </div>
  </ui-section>
</template>

<style scoped lang="scss"></style>
