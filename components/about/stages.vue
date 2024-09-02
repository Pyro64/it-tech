<script setup lang="ts">
type ColorType = 0 | 1

type Stages = {
  id: number
  title: string
  text: string
  backgroundColor: string
  textColor: ColorType
}
const stages: Stages[] = [
  {
    id: 1,
    title: 'Консультация и анализ потребностей',
    text: 'На первом этапе мы проводим детальную консультацию, чтобы понять ваши цели и требования. Изучаем рынок и ваших конкурентов, чтобы предложить оптимальные решения. Мы также обсуждаем бюджет и сроки выполнения проекта, чтобы вы были уверены в реалистичности наших предложений. Это помогает создать сайт, который точно отвечает вашим нуждам и выделяется среди аналогичных проектов. На этом этапе важно учесть все детали, чтобы избежать недоразумений в дальнейшем.',
    backgroundColor: '#2290FF',
    textColor: 0,
  },
  {
    id: 2,
    title: 'Разработка и дизайн',
    text: 'Разрабатываем прототипы и макеты сайта, согласовываем дизайн и функциональные особенности. Создаем несколько вариантов дизайна, чтобы вы могли выбрать наиболее подходящий. Только после вашего утверждения приступаем к программированию, чтобы убедиться, что все соответствует вашим ожиданиям. В процессе разработки вы будете получать регулярные отчеты о прогрессе, чтобы быть в курсе всех этапов работы. Наши дизайнеры и разработчики работают в тесном сотрудничестве, чтобы обеспечить гармоничное сочетание визуальной привлекательности и функциональности.',
    backgroundColor: '#74F7B9',
    textColor: 1,
  },
  {
    id: 3,
    title: 'Тестирование и запуск',
    text: 'Тщательно тестируем готовый продукт, чтобы гарантировать его качество и стабильность. Проводим тестирование на различных устройствах и браузерах, чтобы убедиться в корректной работе сайта в любых условиях. После успешного тестирования запускаем сайт в эксплуатацию, обеспечивая его безупречную работу с самого начала. Мы также предоставляем инструкции по управлению сайтом и обучаем вашего персонала, чтобы вы могли максимально эффективно использовать все его возможности.',
    backgroundColor: '#AE74F7',
    textColor: 0,
  },
  {
    id: 4,
    title: 'Поддержка и развитие',
    text: 'Продолжаем сотрудничество после запуска, предоставляя техническую поддержку и регулярное обновление сайта. Оперативно реагируем на любые возникающие проблемы и вопросы, чтобы вы могли быть уверены в стабильной работе вашего ресурса. Помогаем внедрять новые функции и адаптировать сайт под изменяющиеся потребности вашего бизнеса, обеспечивая его долгосрочный успех. Регулярные обновления и оптимизация помогают поддерживать актуальность и конкурентоспособность вашего сайта на рынке.',
    backgroundColor: '#FE6907',
    textColor: 0,
  },
]

const color: Record<ColorType, string> = {
  0: '#fff',
  1: '#000',
}
</script>

<template>
  <ui-section>
    <div class="stages">
      <div class="wrapper">
        <p class="title">
          Этапы <br />
          взаимодействия
        </p>
      </div>
      <div
        v-for="(item, index) in stages"
        :key="item.id"
        :style="{
          backgroundColor: item.backgroundColor,
          color: color[item.textColor],
        }"
        class="block"
      >
        <div class="item">
          <div
            :style="{
              backgroundColor: color[item.textColor],
              color: item.backgroundColor,
            }"
            class="number"
          >
            {{ index + 1 }}
          </div>
          <p class="text">{{ item.title }}</p>
        </div>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </ui-section>
</template>

<style scoped lang="scss">
.stages {
  @apply grid grid-cols-1 gap-5 md:grid-cols-2;
}
.wrapper {
  @apply flex items-center  md:order-2 md:justify-center;
}
.block {
  @apply rounded-3xl p-5 saturate-100 transition dark:saturate-[0.8] sm:p-10 md:order-3;
  &:nth-child(2) {
    @apply md:order-1;
  }
  &:last-child {
    @apply md:col-span-2;
  }
}
.item {
  @apply mb-5 flex items-center gap-2;
}

.number {
  @apply flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full;
}
.title {
  @apply text-2xl font-semibold;
  @media (min-width: theme('screens.md')) {
    @apply text-4xl font-bold;
  }
  @media (min-width: theme('screens.lg')) {
    @apply text-6xl;
  }
}
.text {
  @apply text-lg font-semibold sm:text-xl;
}
</style>
