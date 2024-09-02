<!-- Блок скрипта для настройки цветовой схемы и опций переключения темы. -->
<script lang="ts" setup>
const colorMode = useColorMode()
const options = [
  {
    label: 'Устройства',
    value: 'system',
  },
  {
    label: 'Темная',
    value: 'dark',
  },
  {
    label: 'Светлая',
    value: 'light',
  },
]
</script>

<template>
  <div class="switch">
    <p class="mr-4">Тема:</p>
    <client-only
      placeholder="загрузка..."
      tag="span"
    >
      <el-select
        v-model="colorMode.preference"
        class="switch__block"
        placeholder="Select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
.switch {
  @apply flex w-full items-center gap-3 lg:w-2/3;
  @include fluid(font-size, 12px, 16px);

  &__block {
    @apply flex-grow;
  }
}
</style>
