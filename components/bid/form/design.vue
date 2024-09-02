<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { ServiceBidDesign } from '~/types/service.models'

const service = useServiceStore()
const { designMap } = service
const { services } = storeToRefs(service)
const design = services.value.design

const refDesign = ref<FormInstance>()
const rules = reactive<FormRules<ServiceBidDesign>>({
  goal: [
    {
      type: 'array',
      required: true,
      message: 'Пожалуйста, выберите от 1 до 2 целей дизайна',
      trigger: 'change',
      min: 1,
      max: 2,
    },
  ],
  types: [
    {
      type: 'array',
      required: true,
      message: 'Пожалуйста, выберите тип дизайна',
      min: 1,
    },
  ],
  style: [
    {
      type: 'array',
      required: true,
      message: 'Пожалуйста, выберите от 1 до 5 стилей дизайна',
      trigger: 'change',
      min: 1,
      max: 5,
    },
  ],
  targetAudience: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
  like: [
    {
      type: 'string',
      required: true,
      message: 'Пожалуйста, опишите понравившиеся дизайны',
      trigger: 'change',
    },
    {
      message: 'Максимальная длинна символов от 5 до 250',
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
})
const options = {
  goal: ['Редизайн существующего продукта', 'Создание нового дизайна'],
  style: [
    'Минимализм',
    'Материал дизайн',
    'Неоморфизм',
    'Скевоморфизм',
    'Ар-Деко',
  ],
}
const titleOptions = ref<string[]>([design.types[0].value])

watch(titleOptions, () => {
  design.types = useWatchIncludes(titleOptions, designMap.options)
})
</script>

<template>
  <el-form
    ref="refDesign"
    :model="services.design"
    :rules="rules"
    label-position="top"
    show-message
  >
    <ui-h3>Услуга: Дизайн</ui-h3>
    <div class="bid">
      <div>
        <bid-form-group-checkbox
          v-model="titleOptions"
          label="Типы дизайна"
          prop="types"
          :options="designMap.options"
        />
        <form-item-select
          v-model="design.goal"
          label="Цели дизайна"
          placeholder="Свой вариант"
          prop="goal"
          :max-tag="2"
          :options="options['goal']"
        />
        <form-item-select
          v-model="design.style"
          label="Желаемые стили дизайна ( или его описание )"
          placeholder="Свой вариант"
          prop="style"
          :max-tag="3"
          :options="options['style']"
        />
      </div>
      <div>
        <form-item-textarea
          v-model="design.targetAudience"
          label="Целевая аудитория"
          placeholder="Женщины от 20 до 50 лет"
          prop="targetAudience"
        />
        <form-item-textarea
          v-model="design.like"
          label="Ссылки на проекты ( дизайн которых вам нравятся )"
          placeholder="https://www.apple.com, https://www.awwwards.com"
          prop="like"
        />
        <form-item-deadline v-model="design.deadline" />
      </div>
    </div>

    <bid-nav :el="refDesign" />
  </el-form>
</template>

<style scoped lang="scss"></style>
