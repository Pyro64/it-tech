<script lang="ts" setup>
import '@fontsource-variable/nunito'
</script>

<template>
  <NuxtLoadingIndicator
    :color="`linear-gradient(to right, var(--main-color) 0%, var(--semi-color) 50%`"
    :height="3"
  />
  <NuxtPage />
</template>
