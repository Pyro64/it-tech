<script setup lang="ts">
import { LineChart } from 'vue-chart-3'
import type { ChartData, ChartOptions } from 'chart.js'
import type { Bar } from '~/types/chart.models'

const global = useGlobalStore()
const { isMobile } = storeToRefs(global)

const props = defineProps<{
  data: Bar[]
}>()
const dataValues = props.data.map(e => e.value)
const dataLabels = props.data.map(e => e.label)

const chartData = computed<ChartData<'line'>>(() => ({
  labels: dataLabels,
  datasets: [
    {
      data: dataValues,
      backgroundColor: useChartColors.value.backgroundColor,
      borderColor: useChartColors.value.backgroundColor,
      borderWidth: 1,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
}))

const options = computed<ChartOptions<'line'>>(() => ({
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: useChartColors.value.textColor, // Color of x-axis labels
      },
      grid: {
        color: useChartColors.value.gridColor, // Color of x-axis grid lines
      },
    },
    y: {
      ticks: {
        color: useChartColors.value.textColor, // Color of y-axis labels
      },
      grid: {
        color: useChartColors.value.gridColor, // Color of y-axis grid lines
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      intersect: false,
    },
    title: {
      display: true,
      text: 'Визиты',
      align: 'start',
      padding: 20,
      color: useChartColors.value.textColor,
      font: {
        size: 18,
        weight: 'normal',
      },
    },
  },
  indexAxis: 'x',
}))

const chartHeight = computed(() => {
  if (isMobile.value) {
    return 75 * props.data.length
  } else {
    return 400
  }
})
</script>

<template>
  <client-only>
    <template #fallback>
      <ui-skeleton
        class="w-full md:!h-[400px]"
        :style="{ height: `${75 * props.data.length}px` }"
      />
    </template>
    <line-chart
      :chart-data="chartData"
      :options="options"
      :height="chartHeight"
    />
  </client-only>
</template>

<style scoped lang="scss"></style>
