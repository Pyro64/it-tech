<script setup lang="ts"></script>

<template>
  <ui-section class="form shadow-card gap-5">
    <div class="form__block">
      <div>
        <ui-h2 class="text-center">Свяжитесь с нами</ui-h2>
        <p class="form__text">
          Вы можете написать нам по любому интересующему вас вопросу: от
          обучения до сотрудничества
        </p>
      </div>
      <div class="form__lottie">
        <ui-lottie name="message" />
      </div>
    </div>
    <form-feedback class="form__item" />
  </ui-section>
</template>

<style scoped lang="scss">
.form {
  @apply flex  flex-col justify-between md:flex-row;
  &__block {
    @apply flex w-full flex-col items-center justify-between gap-4 md:w-1/2;
  }
  &__item {
    @apply w-full md:w-1/2;
  }
  &__text {
    @apply text-balance text-center text-base font-medium sm:text-lg;
  }
  &__lottie {
    @apply h-[200px] w-[200px] md:h-[300px] md:w-[300px];
  }
}
</style>
