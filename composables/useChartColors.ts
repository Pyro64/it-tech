export const useChartColors = computed(() => {
  const semiColor = useCssVar('--semi-color')
  const { r, g, b } = hexToRgb(semiColor.value)
  const colorMode = useColorMode()
  if (colorMode.value === 'light') {
    return {
      backgroundColor: `rgba(${r}, ${g}, ${b}, 1)`,
      textColor: '#3C454F',
      gridColor: `rgba(${r}, ${g}, ${b}, 0.3)`,
    }
  } else {
    return {
      backgroundColor: `rgba(${r}, ${g}, ${b}, 0.8)`,
      textColor: '#C0C0C0',
      gridColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
    }
  }
})
