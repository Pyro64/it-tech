<script setup lang="ts">
import type { ServiceOption } from '~/types/service.models'

const model = defineModel<string>()
const props = defineProps<{
  label: string
  options: ServiceOption[]
  prop: string
}>()
</script>

<template>
  <el-form-item :label="label" :prop="prop">
    <el-radio-group v-model="model" :max="1">
      <el-radio v-for="item in options" :key="item.value" :value="item.value">
        {{ item.value }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<style scoped lang="scss"></style>
