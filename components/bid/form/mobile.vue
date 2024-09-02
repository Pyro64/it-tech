<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { ServiceBidSite } from '~/types/service.models'

const service = useServiceStore()
const { services } = storeToRefs(service)
const { mobileMap } = service
const mobile = services.value.mobile

const refMobile = ref<FormInstance>()

const rules = reactive<FormRules<ServiceBidSite>>({
  type: [
    {
      required: true,
      message: 'Пожалуйста, выберите тип платформы',
      validator: typeValidate,
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
  functional: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      required: true,
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
  like: [
    {
      message: 'Максимальная длинна символов от 5 до 250',
      required: true,
      trigger: 'change',
      min: 5,
      max: 250,
    },
  ],
})
const typeMobile = ref(mobile.type.value)
const titleAdditions = ref<string[]>([])

watch(titleAdditions, () => {
  mobile.additions = useWatchIncludes(titleAdditions, mobileMap.additions)
})

watch(typeMobile, newValue => {
  mobile.type = useWatchFind(newValue, mobileMap)
})
</script>

<template>
  <el-form
    ref="refMobile"
    :model="services.mobile"
    :rules="rules"
    label-position="top"
    show-message
  >
    <ui-h3>Услуга: Разработка сайта</ui-h3>
    <div class="bid">
      <div>
        <bid-form-group-radio
          v-model="typeMobile"
          label="Выбор платформы"
          :options="mobileMap.options"
          prop="type"
        />
        <bid-form-group-checkbox
          v-model="titleAdditions"
          label="Дополнительные опции"
          prop="additions"
          :options="mobileMap.additions"
        />
        <form-item-textarea
          v-model="mobile.functional"
          label="Функциональные требования ( особенности приложения или разделов приложения,
                  на которые следует обратить внимание )"
          placeholder="Онлайн-оплата, Интеграция с ..."
          prop="functional"
        />
      </div>
      <div>
        <form-item-textarea
          v-model="mobile.like"
          label="Ссылки на приложения ( которые вам нравятся )"
          placeholder="https://www.apple.com, https://www.awwwards.com"
          prop="like"
        />
        <form-item-textarea
          v-model="mobile.pages"
          label="Перечислите нужные страницы"
          placeholder="О нас, Контакты, Статьи, Личный кабинет"
          prop="pages"
        />
        <form-item-deadline v-model="mobile.deadline" />
      </div>
    </div>

    <bid-nav :el="refMobile" />
  </el-form>
</template>

<style scoped lang="scss"></style>
