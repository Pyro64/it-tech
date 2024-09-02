import * as ChartJs from 'chart.js'
import { defineNuxtPlugin } from '#app'

// Workaround because chart.js doesn't provide an default export
const { Chart, BarElement, CategoryScale, LinearScale, BarController,
  ArcElement, Tooltip, LineController, PointElement, LineElement, Title } = ChartJs
const fonts = useCssVar('--font')
export default defineNuxtPlugin(() => {
  Chart.register(BarElement, CategoryScale, LinearScale, BarController,
    ArcElement, Tooltip, LineController, PointElement, LineElement, Title)
  Chart.defaults.font.family = fonts.value
})
