<script setup lang="ts">
import { useMouseInElement, useBattery } from '@vueuse/core'

const props = defineProps<{
  target: HTMLDivElement | null
}>()

// Получение значения CSS переменной
const semiColor = useCssVar('--semi-color')
const { r, g, b } = hexToRgb(semiColor.value)

// Отслеживание положения мыши относительно целевого элемента
const { x, y, isOutside } = useMouseInElement(toRef(() => props.target))

// Отслеживание состояния батареи
const { charging, level, isSupported } = useBattery()

// Яркость анимации
const circleBright = computed(() => {
  if (!isSupported.value) return 0.5
  return charging.value ? 1 : level.value
})
// Стиль анимации
const circleStyle = computed(() => ({
  top: `${y.value}px`,
  left: `${x.value}px`,
  background: `rgba(${r}, ${g}, ${b}, ${circleBright.value})`,
}))
</script>

<template>
  <div class="circle" :style="circleStyle" :class="{ outside: isOutside }" />
</template>

<style scoped lang="scss">
.outside {
  @apply h-0 w-0 opacity-0;
}
.circle {
  @apply absolute h-64 w-64 transition xl:h-80 xl:w-80;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  filter: blur(50px);
  z-index: -1;
}
</style>
