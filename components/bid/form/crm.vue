<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { ServiceBidCrm } from '~/types/service.models'

const service = useServiceStore()
const { services } = storeToRefs(service)
const crm = services.value.crm

const refCrm = ref<FormInstance>()

const rules = reactive<FormRules<ServiceBidCrm>>({
  goal: [
    {
      type: 'array',
      required: true,
      message: 'Пожалуйста, выберите от 1 до 2 целей дизайна',
      trigger: 'change',
      min: 1,
      max: 4,
    },
  ],
  functional: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      required: true,
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
  numberUser: [
    {
      type: 'number',
      required: true,
      message: 'Пожалуйста,укажите примерное количество пользователей',
      min: 1,
    },
  ],
  pages: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      required: true,
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
})
const goals = [
  'Улучшение клиентских взаимоотношений',
  'Оптимизация процессов продаж',
  'Анализ данных',
  'Упрощение управления клиентской базой',
]
</script>

<template>
  <el-form
    ref="refCrm"
    :model="services.crm"
    :rules="rules"
    label-position="top"
    show-message
  >
    <ui-h3>Услуга: CRM система</ui-h3>
    <div class="bid">
      <div>
        <form-item-select
          v-model="crm.goal"
          label="Цели crm системы"
          placeholder="Свой вариант"
          prop="goal"
          :max-tag="3"
          :options="goals"
        />
        <form-item-textarea
          v-model="crm.functional"
          label="Функциональные требования ( особенности crm системы,
                  на которые следует обратить внимание )"
          placeholder="Управление клиентскими данными,Управление продажами,Аналитика и отчетность...."
          prop="functional"
        />
        <el-form-item
          label="Количество пользователей (Сколько сотрудников будет использовать CRM?)"
          prop="numberUser"
        >
          <el-input-number v-model="crm.numberUser" :min="1" :step="100" />
        </el-form-item>
      </div>
      <div>
        <form-item-textarea
          v-model="crm.pages"
          label="Перечислите нужные страницы"
          placeholder="Статистика,Отчеты..."
          prop="pages"
        />
        <form-item-textarea
          v-model="crm.integration"
          label="Существующие системы (Какие системы и сервисы нужно интегрировать с CRM?)"
          placeholder="Интеграция с ...."
          prop="integration"
        />

        <form-item-deadline v-model="crm.deadline" />
      </div>
    </div>

    <bid-nav :el="refCrm" />
  </el-form>
</template>

<style scoped lang="scss"></style>
