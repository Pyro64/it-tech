<script setup lang="ts">
import { Plus, Minus } from '@element-plus/icons-vue'
import type { Collapse } from '~/types/ui.models'

type CollapseToggle = Collapse & {
  isOpen: boolean
}
const props = defineProps<{
  faq: Collapse[]
}>()

const faqData = ref<CollapseToggle[]>(
  props.faq.map(e => ({
    ...e,
    isOpen: false,
  }))
)
const toggleFaq = (index: number) => {
  faqData.value.forEach((e, i) => {
    e.isOpen = i === index ? !e.isOpen : false
  })
}
</script>

<template>
  <div class="faq">
    <div
      v-for="(faq, index) in faqData"
      :key="faq.title"
      class="block"
      :class="{ active: faq.isOpen }"
    >
      <div class="item" @click="toggleFaq(index)">
        <p v-html="faq.title" />
        <div class="button">
          <TransitionGroup name="active">
            <el-icon v-if="faq.isOpen" class="svg">
              <Plus />
            </el-icon>
            <el-icon v-else class="svg">
              <Minus />
            </el-icon>
          </TransitionGroup>
        </div>
      </div>
      <div class="wrapper">
        <div
          style="min-height: 0"
          class="prose max-w-full dark:prose-invert"
          v-html="faq.text"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.block {
  @apply relative py-3 sm:py-4;
  &::after {
    @apply transition;
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 1px;
    opacity: 0.3;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 107, 6, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
.wrapper {
  @apply grid overflow-hidden;
  word-break: break-word;
  transition: 0.5s ease-in-out;
  grid-template-rows: 0fr;
}
.active {
  .wrapper {
    grid-template-rows: 1fr;
  }
  .item {
    @apply mb-6;
  }
  &::after {
    opacity: 0.6;
  }
}
.item {
  @apply flex cursor-pointer items-center justify-between text-base font-medium transition-all sm:text-lg;
}
.button {
  @apply relative ml-8 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full;
  background: $mainColor;
}
.svg {
  @apply h-4 w-4;
  position: absolute;
  color: white;
}
</style>
