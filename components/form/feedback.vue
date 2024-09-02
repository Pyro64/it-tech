<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import type { FormInstance, UploadFile, FormRules } from 'element-plus'
import type { FormFeedback } from '~/types/form.models'

// Ссылки и состояния формы
const formRef = ref<FormInstance>()
const isLoading = ref(false)
const formState = ref<FormFeedback>({
  firstname: '',
  phone: '',
  comment: '',
  upload: null,
})

// Правила валидации
const rules = reactive<FormRules<FormFeedback>>({
  firstname: [
    {
      asyncValidator: nameValidate,
      trigger: 'change', // Валидация при изменении
    },
  ],
  phone: [
    {
      asyncValidator: phoneValidate,
      trigger: 'change', // Валидация при изменении
    },
  ],
  comment: [
    {
      trigger: 'change', // Валидация при изменении
      required: true,
    },
  ],
})

// Функция для проверки файла перед загрузкой
const beforeUpload = (file: File) => {
  const isPDF = file.type === 'application/pdf'
  const isLt500K = file.size / 1024 < 3000

  // Проверка типа и размера файла
  if (!isPDF) {
    ElMessage.error('Можно загружать только файлы PDF!')
    return false
  }

  if (!isLt500K) {
    ElMessage.error('Размер файла не должен превышать 500 КБ!')
    return false
  }

  return true
}
const successUpload = (file: UploadFile) => {
  formState.value.upload = file
}
// Функция отправки формы
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // Валидация формы
  await formEl.validate((valid, fields) => {
    if (valid) {
      // Выполнение запроса или действия при успешной валидации
      ElNotification({
        type: 'success',
        title: 'Заявка отправлена',
        message: 'Скоро с вами свяжутся и помогут с выбором.',
      })
    } else {
      // Обработка ошибок валидации
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="flex flex-col justify-between gap-2">
    <el-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      label-position="top"
      show-message
      class="flex flex-col items-center justify-between gap-5"
      @submit.prevent="submitForm(formRef)"
    >
      <el-form-item prop="firstname" class="form__item">
        <el-input
          v-model="formState.firstname"
          type="text"
          placeholder="Имя"
          autocomplete="given-name"
          aria-label="Имя"
          clearable
        />
      </el-form-item>
      <el-form-item prop="phone" class="form__item">
        <el-input
          v-model="formState.phone"
          v-maska
          data-maska="+7 ###-###-##-##"
          type="tel"
          placeholder="+7-800-555-35-35"
          autocomplete="mobile tel"
          aria-label="Телефон"
          clearable
        />
      </el-form-item>
      <el-form-item prop="comment" class="form__item">
        <el-input
          v-model="formState.comment"
          placeholder="Текст"
          type="textarea"
          clearable
          :rows="5"
          :minlength="5"
          :maxlength="200"
          resize="none"
          show-word-limit
          aria-label="Текст вопроса"
        />
      </el-form-item>
      <el-form-item class="form__item" prop="upload">
        <el-upload
          :on-success="(_, file) => successUpload(file)"
          class="upload"
          :before-upload="beforeUpload"
          drag
        >
          <div class="flex items-center justify-center gap-2">
            <el-icon size="25">
              <upload-filled class="text-blue-500" />
            </el-icon>
            <div class="el-upload__text">
              <em>Прикрепить файл</em>
            </div>
          </div>
          <template #tip>
            <div class="mt-1 text-xs">PDF файлы не более 3 mb</div>
          </template>
        </el-upload>
      </el-form-item>
      <el-button
        class="mt-0 w-fit"
        type="primary"
        :loading="isLoading"
        @click="submitForm(formRef)"
      >
        Отправить
      </el-button>
    </el-form>
    <ui-documents-link />
  </div>
</template>

<style scoped lang="scss">
.form {
  &__item {
    @apply mb-0 w-full;
  }
}
.upload {
  @apply w-full;
  :deep(.el-upload-dragger) {
    @apply p-2;
  }
}
.textarea {
  :deep(textarea) {
    resize: none;
  }
}
</style>
