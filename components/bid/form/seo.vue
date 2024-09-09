<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { ServiceBidSeo } from '~/types/service.models'

const service = useServiceStore()
const { services } = storeToRefs(service)
const seo = services.value.seo

const refSeo = ref<FormInstance>()

const rules = reactive<FormRules<ServiceBidSeo>>({
  targetAudience: [
    {
      required: true,
      message: 'Максимальная длинна символов от 5 до 250',
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
  competitors: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
  regions: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
  description: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
  siteLink: [
    {
      asyncValidator: urlValidate,
      trigger: 'change',
    },
  ],
})
</script>

<template>
  <el-form
    ref="refSeo"
    :model="services.seo"
    :rules="rules"
    label-position="top"
    show-message
  >
    <ui-h3>Услуга: SEO продвижение</ui-h3>
    <div class="bid">
      <div>
        <form-item-textarea
          v-model="seo.targetAudience"
          label="Целевая аудитория"
          placeholder="возраст, пол, география, интересы"
          prop="targetAudience"
        />
        <form-item-textarea
          v-model="seo.competitors"
          label="Конкуренты"
          placeholder="Укажите сайты конкурентов, которые нужно учитывать"
          prop="competitors"
        />
        <form-item-textarea
          v-model="seo.regions"
          label="Регионы продвижения"
          placeholder="Москва, московская область, вся Россия..."
          prop="regions"
        />
      </div>
      <div>
        <el-form-item label="Текущий сайт (если он есть)" prop="siteLink">
          <el-input
            v-model="seo.siteLink"
            placeholder="https://pyro-it.vercel.app/"
          />
        </el-form-item>
        <form-item-textarea
          v-model="seo.description"
          label="Описание текущего сайта (если он есть)"
          placeholder="Краткое описание текущего состояния сайта и целей продвижения"
          prop="description"
        />
      </div>
    </div>

    <bid-nav :el="refSeo" />
  </el-form>
</template>

<style scoped lang="scss"></style>
