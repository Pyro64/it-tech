<script setup lang="ts">
const bid = useBidStore()
const { totalPrice } = storeToRefs(bid)
const { numberToView } = useAnimateNumber(totalPrice, 100, 300)
</script>

<template>
  <div class="wrapper" :class="{ active: totalPrice !== 0 }">
    <div style="min-height: 0" class="price">
      <p class="text-base font-semibold">Примерная стоимость</p>
      <p class="text-base font-semibold">
        от <span class="text-semi-500">{{ numberToView }} ₽</span>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply fixed left-0 z-[1] w-full p-3 duration-[380ms];
  transition-timing-function: ease-in-out;
  bottom: -75px;
  border-top: 1px solid $semiColor;
  background: $semiBgColor;

  &.active {
    @apply bottom-0;
  }
  @media (min-width: theme('screens.md')) {
    @apply static grid overflow-hidden border-none p-0;
    transition-timing-function: linear;
    word-break: break-word;
    grid-template-rows: 0fr;
    &.active {
      grid-template-rows: 1fr;
    }
  }
}

.price {
  @apply flex w-full justify-between gap-2;
  @media (min-width: theme('screens.md')) {
    @apply mt-5 justify-end;
  }
}
</style>
