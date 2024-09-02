<script setup lang="ts">
import type { FetchError } from 'ofetch'

const props = defineProps<{
  error: FetchError<any>
  // AsyncDataExecuteOptions не нашел импорт,использовал any
  execute: (opts?: any | undefined) => Promise<void>
}>()
</script>

<template>
  <el-alert
    class="col-span-3"
    title="Ошибка"
    type="error"
    :closable="false"
  >
    <p>Причина: {{ error.cause }}</p>
    <p>Статус:{{ error.statusCode }}</p>
    <el-button
      class="mt-3"
      type="danger"
      @click="execute()"
    >
      Повторить
    </el-button>
  </el-alert>
</template>

<style scoped lang="scss"></style>
