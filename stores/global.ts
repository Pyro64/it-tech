export const useGlobalStore = defineStore('global', () => {
  const { charging, level, isSupported } = useBattery()

  const isLowBattary = computed(() => isSupported.value && !charging.value && level.value <= 0.2)

  watchEffect(() => {
    if (isLowBattary.value) {
      ElNotification({
        title: 'Внимание',
        message: 'Заряд вашего устройства менее 20%',
        type: 'info',
        duration: 5000
      })
    }
  })

  // Отслеживание размеров окна
  const { width } = useWindowSize()
  // Определение мобильного устройства
  const isMobile = computed(() => width.value <= screenWidth.md)

  return { isMobile }
})
