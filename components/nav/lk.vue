<script setup lang="ts">
import { User } from '@element-plus/icons-vue'

const links = ref([
  {
    name: 'Личный кабинет',
    icon: User,
    src: `/lk`,
  },
])
</script>

<template>
  <nav class="nav">
    <nuxt-link
      v-for="link in links"
      :key="link.name"
      :href="link.src"
      class="nav__link"
    >
      <el-icon class="nav__icon">
        <component :is="link.icon" />
      </el-icon>
      <p>{{ link.name }}</p>
    </nuxt-link>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  @apply flex flex-col gap-7;

  &__link {
    @apply block flex items-center gap-2 transition;

    &:hover {
      color: $mainColor;
      .nav {
        &__icon {
          color: $mainColor;
        }
      }
    }
  }

  &__icon {
    @apply text-xl transition;
  }
}
</style>
