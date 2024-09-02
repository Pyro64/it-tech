<script setup lang="ts">
const picker = defineModel<string>()
</script>

<template>
  <el-form-item label="Ожидаемый срок выполнения" prop="deadline">
    <el-date-picker
      v-model="picker"
      type="date"
      placeholder="Выберите дату"
      format="DD-MM-YYYY"
      value-format="DD-MM-YYYY"
    />
  </el-form-item>
</template>

<style scoped lang="scss"></style>
