<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { ServiceBidDevops } from '~/types/service.models'

const service = useServiceStore()
const { services } = storeToRefs(service)
const devops = services.value.devops

const refDevops = ref<FormInstance>()

const rules = reactive<FormRules<ServiceBidDevops>>({
  goal: [
    {
      type: 'array',
      required: true,
      message: 'Пожалуйста, выберите от 1 до 2 целей дизайна',
      trigger: 'change',
      min: 1,
      max: 5,
    },
  ],
  tools: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
  integraions: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
  security: [
    {
      type: 'array',
      required: true,
      message: 'Пожалуйста, выберите требования',
    },
  ],
})

const options = {
  goals: [
    'Автоматизация CI/CD',
    'Ускорение релизов',
    'Повышение надежности системы',
    'Оптимизация инфраструктуры',
  ],
  types: ['Облачная', 'Локальная', 'Гибридная'],
  logging: ['Prometheus', 'Grafana', 'ELK Stack', 'Splunk'],
  security: [
    'WAF (Web Application Firewall)',
    'Управление ключами',
    'Многофакторная аутентификация (MFA)',
    'Управление доступом (RBAC)',
  ],
}
</script>

<template>
  <el-form
    ref="refDevops"
    :model="services.devops"
    :rules="rules"
    label-position="top"
    show-message
    scroll-to-error
  >
    <div class="bid">
      <div>
        <ui-h3>Услуга: DevOps</ui-h3>
        <form-item-select
          v-model="devops.goal"
          label=" Цель услуги DevOps"
          placeholder="Свой вариант"
          prop="goal"
          :max-tag="2"
          :options="options.goals"
        />
        <el-form-item label="Требования к безопасности" prop="security">
          <el-checkbox-group v-model="devops.security">
            <el-checkbox
              v-for="item in options.security"
              :key="item"
              :value="item"
            >
              {{ item }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <form-item-textarea
          v-model="devops.integraions"
          label="Требуемые интеграции"
          placeholder="Укажите системы и базы данных, с которыми требуется интеграция (например, CRM, API)"
          prop="integraions"
        />
        <form-item-select
          v-model="devops.logging"
          label="Желаемые инструменты"
          placeholder="Свой вариант"
          prop="logging"
          :max-tag="2"
          :options="options.logging"
        />
      </div>
      <div>
        <ui-h3>Если есть проект</ui-h3>
        <el-form-item label="Тип инфраструктуры" prop="infra">
          <el-radio-group v-model="devops.infra">
            <el-radio v-for="item in options.types" :key="item" :value="item">
              {{ item }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <form-item-textarea
          v-model="devops.tools"
          label="Инструменты DevOps"
          placeholder="Перечислите используемые CI/CD системы, контейнеризацию, управление конфигурацией (например, Jenkins, Docker, Terraform)"
          prop="tools"
        />
        <form-item-textarea
          v-model="devops.description"
          label="Описание проекта"
          placeholder="Краткое описание текущей инфраструктуры и ключевых задач"
          prop="description"
        />
        <form-item-textarea
          v-model="devops.problems"
          label="Проблемы"
          placeholder="Низкая скорость развертывания..."
          prop="problems"
        />
      </div>
    </div>
    <bid-nav :el="refDevops" />
  </el-form>
</template>

<style scoped lang="scss"></style>
