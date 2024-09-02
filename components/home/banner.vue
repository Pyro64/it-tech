<script setup lang="ts"></script>

<template>
  <ui-section class="banner">
    <div class="banner__block">
      <h1 class="banner__title">IT компания <span>нового поколения</span></h1>
      <el-text tag="p" class="banner__text">
        Наша IT-компания специализируется на разработке высококачественных
        веб-сайтов, отвечающих всем современным требованиям и стандартам. Мы
        предлагаем полный спектр услуг: от дизайна и программирования до
        SEO-оптимизации и поддержки. Наши опытные специалисты создадут для вас
        уникальный продукт, который привлечет и удержит вашу аудиторию,
        обеспечив успешное развитие вашего бизнеса в цифровом пространстве.
      </el-text>
    </div>
    <div class="animation">
      <ui-lottie name="company" />
    </div>
  </ui-section>
</template>

<style scoped lang="scss">
.banner {
  @apply flex flex-col-reverse items-start justify-between gap-5 lg:flex-row lg:items-center;
  &__block {
    @apply w-full lg:w-1/2;
  }
  &__title {
    @apply mb-5 text-4xl font-semibold sm:mb-10 sm:text-6xl;
    span {
      @apply block text-3xl text-semi-400 sm:text-5xl;
    }
  }

  &__text {
    @apply text-balance text-base;
  }
}
.animation {
  @apply h-[380px] w-full sm:h-[420px] sm:w-[420px];
}
</style>
