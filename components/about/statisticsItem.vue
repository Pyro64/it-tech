<script setup lang="ts">
const props = defineProps<{
  value: number
  text: string
}>()
const target = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(target)
const number = ref(0)
const { numberToView } = useAnimateNumber(number)
onMounted(() => {
  watch(targetIsVisible, () => {
    if (targetIsVisible.value) {
      number.value = props.value
    } else {
      number.value = Math.random() * props.value
    }
  }, { immediate: true })
})
</script>

<template>
  <div
    ref="target"
    class="statistic shadow-card h-full min-h-40"
  >
    <p class="text-2xl font-bold mb-2">{{ numberToView }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.statistic {
}
</style>
