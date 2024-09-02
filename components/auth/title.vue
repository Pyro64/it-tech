<script setup lang="ts">
import { Back } from '@element-plus/icons-vue'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="header">
    <el-tooltip
      content="На главную"
      :trigger="['focus', 'hover']"
      placement="top-start"
    >
      <nuxt-link
        class="home"
        tabindex="0"
        role="button"
        href="/"
      >
        <el-icon class="home__svg">
          <Back />
        </el-icon>
      </nuxt-link>
    </el-tooltip>

    <h1 class="text-center text-xl font-medium">{{ props.title }}</h1>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply relative mb-8;
  view-transition-name: auth-title;
}
.home {
  @apply top-[-30px] flex cursor-pointer items-center justify-center transition;
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  border-radius: 100%;
  background: $bgColor;
  padding: 10px;
  &:hover {
    background: $mainColor;
    .home__svg {
      color: #fff;
    }
  }
  &__svg {
    @apply transition;
    color: $textColor;
  }

  @media (min-width: theme('screens.sm')) {
    @apply top-1/2;
  }
}
</style>
