<script lang="ts" setup>
interface ISocial {
  icon: string
  link: string
  title: string
}

const socials = ref<ISocial[]>([
  {
    icon: 'local:telegram',
    link: 'https://t.me/Deadall64',
    title: 'Telegram',
  },
])
</script>

<template>
  <div class="social">
    <a
      v-for="social in socials"
      :key="social.icon"
      :href="social.link"
      :title="social.title"
      class="relative block"
      target="_blank"
    >
      <Icon :name="social.icon" class="social__icon" aria-hidden="true" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  @apply gap-[12px];
  &__icon {
    @apply transition;
    font-size: 28px;
    color: $textColor;

    &:hover {
      color: $mainColor;
    }
  }
}
</style>
