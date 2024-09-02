<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { ServiceBidSite } from '~/types/service.models'

const service = useServiceStore()
const { services } = storeToRefs(service)
const { siteMap } = service
const site = services.value.site

const refSite = ref<FormInstance>()
const rules = reactive<FormRules<ServiceBidSite>>({
  type: [
    {
      required: true,
      message: 'Пожалуйста, выберите тип сайта',
      validator: typeValidate,
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
const typeSite = ref(site.type.value)
const titleAdditions = ref<string[]>([])

watch(titleAdditions, () => {
  site.additions = useWatchIncludes(titleAdditions, siteMap.additions)
})

watch(typeSite, newValue => {
  site.type = useWatchFind(newValue, siteMap)
})
</script>

<template>
  <el-form
    ref="refSite"
    :model="services.site"
    :rules="rules"
    label-position="top"
    show-message
  >
    <ui-h3>Услуга: Разработка сайта</ui-h3>
    <div class="bid">
      <div>
        <bid-form-group-radio
          v-model="typeSite"
          label="Тип сайта"
          :options="siteMap.options"
          prop="type"
        />
        <bid-form-group-checkbox
          v-model="titleAdditions"
          label="Дополнительные опции"
          prop="additions"
          :options="siteMap.additions"
        />
        <form-item-textarea
          v-model="site.functional"
          label="Функциональные требования ( особенности сайта или разделов сайта,
                  на которые следует обратить внимание )"
          placeholder="Онлайн-оплата, Интеграция с ..."
          prop="functional"
        />
      </div>
      <div>
        <form-item-textarea
          v-model="site.like"
          label="Ссылки на приложения ( которые вам нравятся )"
          placeholder="https://www.apple.com, https://www.awwwards.com"
          prop="like"
        />
        <form-item-textarea
          v-model="site.pages"
          label="Перечислите нужные страницы"
          placeholder="О нас, Контакты, Статьи, Личный кабинет"
          prop="pages"
        />
        <form-item-deadline v-model="site.deadline" />
      </div>
    </div>

    <bid-nav :el="refSite" />
  </el-form>
</template>

<style scoped lang="scss"></style>
