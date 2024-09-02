<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { RecoveryForm } from '~/types/auth.models'
import type { FormItems } from '~/types/form.models'

const authStore = useAuthStore()
const { authFormState } = storeToRefs(authStore)

const formRef = ref<FormInstance>()
const isLoading = ref(false)
const rules = reactive<FormRules<RecoveryForm>>({
  email: [
    {
      asyncValidator: emailValidate,
      trigger: 'change',
    },
  ],
})
const formState = ref<RecoveryForm>({
  email: authFormState.value.email,
})
// Элементы формы
const FormData: FormItems<RecoveryForm>[] = [
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
]
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      //   authRequest(data, isLoading)
      // router.push(`${route.path}?email="${email}"`)
      // ElMessage({
      //   message: 'В разработке',
      //   type: 'info',
      // })
      // ElNotification({
      //   title: 'Восстановление пароля',
      //   dangerouslyUseHTMLString: true,
      //   message: `<p>Пройдите по ссылке,отправленной на почту<p/>`,
      //   type: 'info',
      //   duration: 7000,
      //   showClose: true,
      // })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form
    ref="formRef"
    :model="formState"
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
        v-model="formState[el.item.model]"
        v-bind="el.props"
      />
    </el-form-item>
    <el-button
      class="w-fit"
      type="primary"
      :loading="isLoading"
      @click="submitForm(formRef)"
    >
      Отправить
    </el-button>
  </el-form>
</template>

<style scoped lang="scss"></style>
