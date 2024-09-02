<script setup lang="ts">
import { useFocus } from '@vueuse/core'

const userStore = useUserStore()
const { isOpenDrawer, isBadge, userInfo, isLoading } = storeToRefs(userStore)

const target = ref()
useFocus(target, { initialValue: true })
</script>

<template>
  <button
    ref="target"
    class="avatar"
    tabindex="0"
    @keyup.enter="isOpenDrawer = true"
    @click="isOpenDrawer = true"
  >
    <el-badge :is-dot="true" :hidden="!isBadge" class="h-full w-full">
      <div v-loading="isLoading" class="overflow-hidden rounded-full">
        <nuxt-img
          fit="fill"
          :placeholder="[150, 150, 20, 3]"
          format="webp"
          alt="аватар"
          class="avatar__image"
          :src="userInfo.avatarUrl"
        />
      </div>
    </el-badge>
  </button>
</template>

<style scoped lang="scss">
.avatar {
  @apply cursor-pointer rounded-full transition-all;
  border: 1px solid transparent;
  background: $hintColor;

  &:hover {
    border: 1px solid $mainColor;
  }

  &__image {
    @apply h-10 w-10 rounded-full transition md:h-[47px] md:w-[47px];
    display: block;
  }
}
</style>
