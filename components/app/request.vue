<script setup lang="ts"></script>

<template>
  <div id="form" class="help">
    <div class="block">
      <div>
        <ui-h2>Остались вопросы?</ui-h2>
        <p class="text-base font-medium">
          Оставьте заявку и наши менеджеры свяжутся с вами.
        </p>
      </div>
      <form-request class="w-full lg:w-1/2" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.help {
  @apply py-8;
  background: $semiBgColor;
}
.block {
  @apply container flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center;
}
</style>
