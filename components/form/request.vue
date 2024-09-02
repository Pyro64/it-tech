<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import {
  componentMap,
  type FormItems,
  type FormRequest,
} from '~/types/form.models'

// Ссылки и состояния формы
const formRef = ref<FormInstance>()
const isLoading = ref(false)
const formState = ref<FormRequest>({
  firstname: '',
  phone: '',
})

// Правила валидации формы
const rules = reactive<FormRules<FormRequest>>({
  firstname: [
    {
      asyncValidator: nameValidate,
      trigger: 'change',
    },
  ],
  phone: [
    {
      asyncValidator: phoneValidate,
      trigger: 'change',
    },
  ],
})
const FormData: FormItems<FormRequest>[] = [
  {
    type: 'input',
    item: {
      model: 'firstname',
    },
    props: {
      placeholder: 'Имя',
      clearable: true,
      type: 'text',
      autocomplete: 'given-name',
    },
  },
  {
    type: 'phone',
    item: {
      model: 'phone',
    },
    props: {
      placeholder: '+7-800-555-35-35',
      clearable: true,
      type: 'tel',
      autocomplete: 'mobile tel',
      ariaLabel: 'Телефон',
    },
  },
]
// Функция отправки формы
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(formState.value)
      ElNotification({
        type: 'success',
        title: 'Заявка отправлена',
        message: 'Скоро с вами свяжутся и помогут с выбором.',
      })
    } else {
      console.log('Ошибка отправки!', fields)
    }
  })
}
</script>

<template>
  <div class="flex flex-col-reverse justify-between gap-2 sm:flex-col">
    <ui-documents-link />
    <el-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      label-position="top"
      show-message
      class="flex flex-col items-center justify-between gap-5 sm:flex-row"
      @submit.prevent="submitForm(formRef)"
    >
      <el-form-item
        v-for="el in FormData"
        :key="el.item.model"
        v-bind="el.item"
        :prop="el.item.model"
        class="item"
      >
        <component
          :is="componentMap[el.type]"
          v-model="formState[el.item.model]"
          v-bind="el.props"
        />
      </el-form-item>
      <el-button
        class="mt-4 w-fit sm:mt-0"
        type="primary"
        :loading="isLoading"
        @click="submitForm(formRef)"
      >
        Отправить
      </el-button>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.item {
  @apply mb-0 w-full;
}
</style>
