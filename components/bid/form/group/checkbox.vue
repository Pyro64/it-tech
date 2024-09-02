<script setup lang="ts">
import type { ServiceOption } from '~/types/service.models'

const model = defineModel<string[]>()
const props = defineProps<{
  label: string
  options: ServiceOption[]
  prop: string
}>()
</script>

<template>
  <el-form-item :label="label" :prop="prop">
    <el-checkbox-group v-model="model">
      <el-checkbox
        v-for="item in options"
        :key="item.value"
        :value="item.value"
      >
        {{ item.value }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<style scoped lang="scss"></style>
