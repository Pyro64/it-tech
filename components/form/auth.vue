<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { AuthForm } from '~/types/auth.models'
import type { FormItems } from '~/types/form.models'

// Хранилище авторизации
const authStore = useAuthStore()
const { authRequest } = authStore
const { authFormState } = storeToRefs(authStore)

// Ссылки и состояния формы
const formRef = ref<FormInstance>()
const isLoading = ref(false)

// Правила валидации формы
const rules = reactive<FormRules<AuthForm>>({
  email: [
    {
      asyncValidator: emailValidate,
      trigger: 'change',
      required: true,
    },
  ],
  password: [
    {
      min: 8,
      message: 'Пароль должен иметь минимум 8 символов',
      trigger: 'change',
      required: true,
    },
  ],
})

// Элементы формы
const FormData: FormItems<AuthForm>[] = [
  {
    type: 'input',
    item: {
      label: 'Почта',
      model: 'email',
    },
    props: {
      placeholder: '1@mail.ru',
      clearable: true,
      type: 'email',
      autocomplete: 'email',
    },
  },
  {
    type: 'input',
    item: {
      label: 'Пароль',
      model: 'password',
    },
    props: {
      placeholder: '********',
      clearable: true,
      type: 'password',
      showPassword: true,
    },
  },
]
// Функция отправки формы
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      authRequest(authFormState.value, isLoading)
    } else {
      console.log('Ошибка отправки!', fields)
    }
  })
}
</script>

<template>
  <el-form
    ref="formRef"
    :model="authFormState"
    :rules="rules"
    label-position="top"
    show-message
    class="mb-10 flex flex-col items-center"
    @submit.prevent="submitForm(formRef)"
  >
    <el-form-item
      v-for="el in FormData"
      :key="el.item.model"
      v-bind="el.item"
      :prop="el.item.model"
      class="w-full"
    >
      <el-input
        v-if="el.type === 'input'"
        v-model="authFormState[el.item.model]"
        v-bind="el.props"
      />
    </el-form-item>
    <el-button
      class="w-fit"
      type="primary"
      :loading="isLoading"
      @click="submitForm(formRef)"
    >
      Войти
    </el-button>
  </el-form>
</template>

<style scoped lang="scss"></style>
