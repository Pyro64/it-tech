<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

type Link = NuxtLinkProps & {
  type?: 'default' | 'button' | 'primary'
}
const props = withDefaults(defineProps<Link>(), {
  type: 'default',
})
const filteredProps = computed(() => {
  const { type, ...rest } = props
  return rest
})
</script>

<template>
  <nuxt-link
    v-bind="filteredProps"
    :class="[
      { button: type === 'button' },
      { link: type === 'default' },
      { primary: type === 'primary' },
    ]"
    active-class="link--active"
  >
    <slot />
  </nuxt-link>
</template>

<style scoped lang="scss">
.link {
  @apply relative w-fit transition;
  color: $textColor;
  &::after {
    @apply transition-all;
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    left: 50%;
    bottom: 0;
    background: $mainColor;
  }
  &--active {
    color: $mainColor;
  }
  &:hover {
    &::after {
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
    }
  }
  &:active {
    &::after {
      left: 50%;
      width: 100%;
    }
  }
}
.button {
  @apply flex h-10 w-fit items-center justify-center rounded-[4px] px-4  text-sm font-medium  transition;
  background: $semiBgColor;
  color: $textColor;
  border: 1px solid theme('colors.main.500 / 70%');
  &:hover {
    @apply bg-main-400 text-white;
  }
  &:active {
    @apply bg-main-600 text-white;
  }
}
.primary {
  @apply transition;
  color: $mainColor;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
}
</style>
