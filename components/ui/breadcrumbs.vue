<script setup lang="ts">
import type { Breadcrumb } from '~/types/ui.models'

const props = defineProps<{
  breadcrumbs: Breadcrumb[]
}>()
</script>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="link in breadcrumbs"
        :key="link.href"
        class="mb-3"
      >
        <nuxt-link v-if="link.href" :href="link.href">
          {{ link.name }}
        </nuxt-link>
        <p v-else class="capitalize leading-5">{{ link.name }}</p>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss"></style>
