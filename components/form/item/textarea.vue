<script setup lang="ts">
const model = defineModel<string>()
const props = defineProps<{
  label: string
  prop: string
  placeholder: string
}>()
</script>

<template>
  <el-form-item :label="label" :prop="prop">
    <el-input
      v-model="model"
      type="textarea"
      show-word-limit
      :placeholder="placeholder"
      :minlength="5"
      :maxlength="250"
      :rows="5"
      resize="none"
    />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
