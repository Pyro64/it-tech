<script setup lang="ts">
const model = defineModel<string[]>()
const props = defineProps<{
  label: string
  prop: string
  placeholder: string
  maxTag: number
  options: string[]
}>()
</script>

<template>
  <el-form-item :label="label" :prop="prop">
    <el-select
      v-model="model"
      multiple
      filterable
      allow-create
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="maxTag"
      default-first-option
      :reserve-keyword="false"
      :placeholder="placeholder"
      :clearable="true"
      size="large"
    >
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </el-form-item>
</template>

<style scoped lang="scss"></style>
