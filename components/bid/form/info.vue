<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { BidInfo, BidPersonal } from '~/types/bid.models'

import { componentMap, type FormItems } from '~/types/form.models'

onMounted(() => {
  serviceToQuery()
})

const route = useRoute()
const bid = useBidStore()
const service = useServiceStore()
const { bidInfo } = storeToRefs(bid)
const { servicesKeys, servicesCheckbox } = service

const rules = reactive<FormRules<BidInfo>>({
  organization: [
    {
      min: 2,
      max: 30,
      trigger: 'change',
      required: true,
      message: 'Название должно быть от 2 до 30 символов',
    },
  ],
  phone: [
    {
      asyncValidator: phoneValidate,
      trigger: 'change',
      required: true,
    },
  ],
  name: [
    {
      asyncValidator: nameValidate,
      trigger: 'change',
      required: true,
    },
  ],
  email: [
    {
      asyncValidator: emailValidate,
      trigger: 'change',
      required: true,
    },
  ],
  industry: [
    {
      min: 2,
      max: 50,
      trigger: 'change',
      required: true,
      message: 'Поле должно быть от 2 до 30 символов',
    },
  ],
  services: [
    {
      type: 'array',
      required: true,
      message: 'Выберите минимум одну услугу',
      trigger: 'change',
      min: 1,
    },
  ],
})
const formData: FormItems<BidPersonal>[] = [
  {
    type: 'input',
    item: {
      label: 'ФИО контактного лица',
      model: 'name',
    },
    props: {
      placeholder: 'Трифонов Роман Викторович',
      clearable: true,
      type: 'text',
      autocomplete: 'given-name',
    },
  },
  {
    type: 'input',
    item: {
      label: 'Почта',
      model: 'email',
    },
    props: {
      placeholder: '1@mail.com',
      clearable: true,
      type: 'email',
      autocomplete: 'email',
    },
  },
  {
    type: 'phone',
    item: {
      label: 'Номер Телефона',
      model: 'phone',
    },
    props: {
      placeholder: '+ 7 800 555 35 35',
      clearable: true,
      type: 'tel',
      autocomplete: 'mobile tel',
    },
  },
  {
    type: 'input',
    item: {
      label: 'Название организации (полное)',
      model: 'organization',
    },
    props: {
      placeholder: 'Skills2up',
      clearable: true,
      type: 'text',
    },
  },
  {
    type: 'input',
    item: {
      label: 'Отрасль, область деятельности организации',
      model: 'industry',
    },
    props: {
      placeholder: 'Онлайн-школа топ-менеджмента',
      clearable: true,
      type: 'text',
    },
  },
]
const refInfo = ref<FormInstance>()

const serviceToQuery = () => {
  const routeService = route.query.service
  if (route.fullPath === '/zayavka') {
    return
  }
  if (routeService) {
    const ServiceRouteToArray = Array.isArray(routeService)
      ? routeService
      : [routeService]
    const querySet = new Set(ServiceRouteToArray)
    const filtered = servicesKeys
      .filter(service => querySet.has(service))
      .map(service => service)

    if (ServiceRouteToArray.length === filtered.length) {
      bidInfo.value.services.push(...filtered)
    } else {
      throw createError({
        statusCode: 400,
        message: `Невалидный фильтр: ${routeService}`,
        fatal: true,
      })
    }
  } else {
    throw createError({
      statusCode: 400,
      message: `query параметр должен называться service: ${route.fullPath}`,
      fatal: true,
    })
  }
}
</script>

<template>
  <el-form
    ref="refInfo"
    :model="bidInfo"
    :rules="rules"
    label-position="top"
    show-message
  >
    <div class="bid">
      <div>
        <ui-h3>Контактная информация</ui-h3>
        <el-form-item
          v-for="el in formData"
          :key="el.item.model"
          v-bind="el.item"
          :prop="el.item.model"
          class="w-full"
        >
          <component
            :is="componentMap[el.type]"
            v-model="bidInfo[el.item.model]"
            v-bind="el.props"
          />
        </el-form-item>
      </div>
      <div>
        <ui-h3>Выбор услуги</ui-h3>
        <el-form-item label="Услуги" prop="services" class="services">
          <el-checkbox-group
            v-model="bidInfo.services"
            class="group"
            aria-label="Выбор услуги"
          >
            <el-checkbox
              v-for="el in servicesCheckbox"
              :key="el.type"
              :label="el.title"
              :value="el.type"
              name="services"
              size="large"
              :border="true"
              class="!mr-0"
            />
          </el-checkbox-group>
        </el-form-item>
      </div>
    </div>
    <bid-nav :el="refInfo" />
  </el-form>
</template>

<style scoped lang="scss">
.group {
  @apply grid w-full grid-cols-1 justify-between gap-5 sm:grid-cols-2;
}
</style>
