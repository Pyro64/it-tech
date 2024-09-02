export const useAnimateNumber = (number: Ref<number>, debounce = 1000, duration = 1000,) => {
  const debounced = useDebounce(number, debounce)
  const animateNumber = useTransition(debounced, {
    duration: duration,
    transition: [0.75, 0, 0.25, 1]
  })
  const numberToView = computed(() => {
    return useFormateNumber(animateNumber.value.toFixed(0))
  })
  return { animateNumber, numberToView }
}
