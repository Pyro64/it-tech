import type { UseSwipeDirection } from '@vueuse/core'

export const useSwipeChange = (data: Ref<boolean>, dir: UseSwipeDirection) => {
  const target = ref<HTMLElement | null>(null)
  const { direction } = useSwipe(target)
  watch(direction, () => {
    if (direction.value === dir) {
      data.value = false
    }
  })
  return target
}
