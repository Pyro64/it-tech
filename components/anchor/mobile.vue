<script setup lang="ts">
import { Link } from '@element-plus/icons-vue'
import type { Anchor } from '~/types/ui.models'

const props = defineProps<{
  anchorLinks: Anchor[]
}>()
const { y } = useWindowScroll()
const isOpen = ref(false)

const isVisibleMenu = ref(false)

watchEffect(() => {
  if (y.value > 500) {
    isVisibleMenu.value = true
  }
  if (y.value < 500) {
    isVisibleMenu.value = false
  }
})
</script>

<template>
  <client-only>
    <el-button
      type="primary"
      :icon="Link"
      circle
      class="button"
      :class="{ visible: isVisibleMenu }"
      @click="isOpen = true"
    />
    <lazy-el-drawer
      v-model="isOpen"
      title="Якорные ссылки"
      direction="btt"
      size="auto"
    >
      <el-anchor :marker="false" :offset="100" class="pl-0">
        <el-anchor-link
          v-for="link in anchorLinks"
          :key="link.href"
          :href="`#${link.href}`"
          class="mobile"
          @click="isOpen = false"
        >
          {{ link.name }}
        </el-anchor-link>
      </el-anchor>
    </lazy-el-drawer>
  </client-only>
</template>

<style scoped lang="scss">
.button {
  @apply fixed bottom-28 right-6 z-[5] opacity-0 shadow-2xl transition;
  box-shadow: var(--el-box-shadow-lighter);
}
.visible {
  opacity: 1;
}
.link {
  @apply text-xl;
}
</style>
