<script setup lang="ts">
import type { VacancyCard } from '~/types/vacancy.models'

const props = defineProps<VacancyCard>()
const emit = defineEmits(['open-modal'])

const minSalary = useFormateNumber(props.min_salary.toString())
const maxSalary = computed(() => {
  if (props.max_salary) {
    return useFormateNumber(props.max_salary.toString())
  } else return null
})
</script>

<template>
  <div class="shadow-card">
    <div class="header">
      <ui-h2 class="!mb-0">{{ props.title }}</ui-h2>
      <ui-tags :tags="props.tags" />
    </div>

    <div class="content">
      <div>
        <ui-h3>О Вакансии</ui-h3>
        <app-collapse :faq="props.about" />
      </div>
      <div>
        <ui-h3>Ключевые навыки</ui-h3>
        <div class="flex flex-wrap gap-2">
          <ui-popover v-for="el in props.tools" :key="el.title" :el="el" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="links">
        <el-button type="primary" @click="emit('open-modal')">
          Откликнуться
        </el-button>
        <ui-link :href="props.link" target="_blank" type="button">
          Ссылка на HH
        </ui-link>
      </div>
      <p class="salary">
        {{ maxSalary ? `${minSalary} - ${maxSalary}` : `от ${minSalary}` }}
        ₽
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply mb-5 flex flex-col justify-between gap-4 md:flex-row;
}
.salary {
  @apply text-base font-medium underline underline-offset-4 md:text-lg;
}
.content {
  @apply mb-8 grid grid-cols-1 gap-6;
  @media (min-width: theme('screens.xl')) {
    @apply grid-cols-2 gap-10;
  }
}
.footer {
  @apply flex flex-col items-end justify-between gap-4;
  @media (min-width: theme('screens.sm')) {
    @apply flex-row items-center gap-4;
  }
}
.links {
  @apply flex w-full flex-col flex-wrap items-end gap-4;
  @media (min-width: theme('screens.sm')) {
    @apply w-fit  flex-row  items-center justify-start gap-2;
  }
}
</style>
