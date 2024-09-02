<script lang="ts" setup>
import type { NavFooter } from '~/types/ui.models'

const yaer = new Date().getFullYear()
const name = useSiteName()
const upperCaseName = useSiteName(true)

const innerLinks: NavFooter[] = [
  {
    subtitle: name,
    links: [
      {
        href: '/o-nas',
        name: 'О нас',
      },
      {
        name: 'Проекты',
        href: '/proekty',
      },
      {
        name: 'Контакты',
        href: '/kontakty',
      },
    ],
  },
  {
    subtitle: 'Сотрудничество',
    links: [
      {
        name: 'Услуги',
        href: '/uslugi',
      },
      {
        name: 'Вакансии',
        href: '/vakansii',
      },
      {
        name: 'Заполнить брифинг',
        href: '/zayavka',
      },
    ],
  },
  {
    subtitle: 'Журнал',
    links: [
      {
        name: 'Статьи',
        href: '/stati',
      },
    ],
  },
]
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__left">
        <app-logo />
        <div class="footer__info">
          <a class="footer__link" :href="`mailto:trifonov.roman64@gmail.com`">
            trifonov.roman64@gmail.com
          </a>
          <p class="footer__support">
            Телефон для связи:
            <a class="footer__link" href="tel:+7 987 302 91 55">
              +7 987 302 91 55
            </a>
          </p>
          <app-social class="flex" />
        </div>
      </div>
      <div class="footer__right">
        <div class="footer__wrapper">
          <div
            v-for="block in innerLinks"
            :key="block.subtitle"
            class="footer__block"
          >
            <div class="footer__subtitle">
              {{ block.subtitle }}
            </div>
            <nuxt-link
              v-for="link in block.links"
              :key="link.name"
              :href="link.href"
              :target="link.blank ? '_black' : '_self'"
              class="footer__nav"
            >
              {{ link.name }}
            </nuxt-link>
          </div>
        </div>
        <div class="reserve">
          <p class="reserve__text">{{ upperCaseName }} 2021 - {{ yaer }}</p>

          <nuxt-link
            class="reserve__link"
            href="/documents/policy.pdf"
            target="_blank"
          >
            Политика конфиденциальности
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $semiBgColor;
  position: relative;
  z-index: 2;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, $semiColor 40%, $mainColor 60%);
  }

  &__container {
    @apply container flex flex-col justify-between py-[30px];

    @media (min-width: theme('screens.xl')) {
      @apply flex-row;
      @include fluid(padding-top, 40px, 72px);
      @include fluid(padding-bottom, 40px, 72px);
    }
  }

  &__left {
    @apply mb-11 flex flex-col items-start justify-between gap-10;
    @media (min-width: theme('screens.sm')) {
      @apply flex-row items-center;
    }
    @media (min-width: theme('screens.xl')) {
      @apply mb-0 flex-col items-start gap-0;
    }
  }

  &__right {
    @apply flex flex-col items-start xl:items-end;
  }

  &__wrapper {
    @apply mb-9 flex flex-col flex-wrap gap-9;
    @media (min-width: theme('screens.sm')) {
      @apply mb-16 flex-row;
    }
    @media (min-width: theme('screens.md')) {
      @apply flex-nowrap gap-[60px];
    }
  }

  &__block {
    @apply flex w-fit flex-col gap-6;
  }

  &__info {
    @apply flex flex-col gap-5;
  }

  &__subtitle {
    font-size: 16px;
    opacity: 0.7;
    text-transform: uppercase;
    position: relative;
    width: fit-content;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -5px;
      left: 0;
      background: $textColor;
    }
  }

  &__link {
    @apply text-base transition;
    display: block;
    color: $textColor;

    &:hover {
      color: $mainColor;
    }
  }

  &__nav {
    @apply font-semibold transition;
    display: block;
    font-size: 16px;
    color: $textColor;
    width: fit-content;

    &:hover {
      color: $mainColor;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;

      &:hover {
        color: $textColor;
      }
    }
  }
}

.reserve {
  @apply flex flex-col-reverse items-start justify-center gap-5;
  font-size: 16px;
  list-style: inside;
  @media (min-width: theme('screens.sm')) {
    @apply flex-row gap-10;
  }
  @media (min-width: theme('screens.xl')) {
    @apply justify-start;
  }

  &__link {
    @apply font-semibold transition;
    cursor: pointer;
    position: relative;

    &:hover {
      opacity: 1;
      color: $mainColor;
    }

    &::before {
      content: '';
      display: none;
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $textColor;
      opacity: 0.5;
      @media (min-width: theme('screens.sm')) {
        display: block;
        left: -20px;
        top: 50%;
      }
    }
  }

  &__text {
    opacity: 0.7;
  }
}
</style>
