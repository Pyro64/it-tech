<script lang="ts" setup>
const name = useSiteName()
const first = name.slice(0, 3)
const second = name.slice(3, 7)
</script>

<template>
  <nuxt-link class="logo" href="/">
    <svg
      class="logo__svg"
      viewBox="-1 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g>
        <path
          d="M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-2.97.006a5.03 5.03 0 1 0-5.03 5.03 5.03 5.03 0 0 0 5.03-5.03zm-7.383-.4H4.289a4.237 4.237 0 0 1 2.565-3.498q.1-.042.2-.079a7.702 7.702 0 0 0-.907 3.577zm0 .8a7.7 7.7 0 0 0 .908 3.577q-.102-.037-.201-.079a4.225 4.225 0 0 1-2.565-3.498zm.8-.8a9.04 9.04 0 0 1 .163-1.402 6.164 6.164 0 0 1 .445-1.415c.289-.615.66-1.013.945-1.013.285 0 .656.398.945 1.013a6.18 6.18 0 0 1 .445 1.415 9.078 9.078 0 0 1 .163 1.402zm3.106.8a9.073 9.073 0 0 1-.163 1.402 6.187 6.187 0 0 1-.445 1.415c-.289.616-.66 1.013-.945 1.013-.285 0-.656-.397-.945-1.013a6.172 6.172 0 0 1-.445-1.415 9.036 9.036 0 0 1-.163-1.402zm1.438-3.391a4.211 4.211 0 0 1 1.22 2.591h-1.858a7.698 7.698 0 0 0-.908-3.577q.102.037.201.08a4.208 4.208 0 0 1 1.345.906zm-.638 3.391h1.858a4.238 4.238 0 0 1-2.565 3.498q-.1.043-.2.08a7.697 7.697 0 0 0 .907-3.578z"
        />
      </g>
    </svg>

    <p class="logo__title">
      <span>{{ first }}</span>

      <b>{{ second }}</b>
    </p>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.logo {
  @apply flex w-fit items-center gap-2;
  &__title {
    @apply text-base font-medium uppercase;
    color: $semiTextColor;
    span {
      margin-right: 2px;
    }
    span,
    b {
      @apply transition;
    }
  }

  &__svg {
    @apply h-10 w-10;
    fill: $mainColor;
  }

  &:hover {
    .logo {
      &__title {
        span {
          color: $mainColor;
        }
        b {
          color: $semiColor;
        }
      }
    }
  }
}
</style>
