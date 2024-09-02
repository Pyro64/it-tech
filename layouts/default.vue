<script setup lang="ts">
import ru from 'element-plus/dist/locale/ru.mjs'

const config = reactive({
  max: 3,
})
// класс theme не убирать,он нужен для перебивания стилей ui либы,класс увеличивывает специфичность селектора
const setClass = 'theme'

// глобальная настройка metatitle
useHead({
  titleTemplate: title => {
    return title ? `${title}` : ''
  },
})
</script>

<template>
  <Html lang="ru" :class="setClass">
    <Head>
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <el-config-provider :locale="ru" :message="config" size="large">
      <slot />
    </el-config-provider>
  </Html>
</template>

<style scoped lang="scss"></style>
