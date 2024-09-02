<script setup lang="ts">
import type { ApiResponse } from '~/types/server.models'

const colorMode = useColorMode()
type Companies = {
  imageUrl: string
  id: string
  companyName: string
  redirectUrl: string | null
}
const isDarkTheme = computed(() => (colorMode.value === 'dark' ? true : false))

const {
  data: companies,
  status,
  error,
  execute,
} = await useCustomFetch<ApiResponse<Companies[]>>(
  'api/partner-company/user/list',
  {
    lazy: true,
    server: false,
    key: `companies/isDarkTheme=${isDarkTheme.value}`,
    query: { isDarkThemeEnabled: isDarkTheme },
  }
)
</script>

<template>
  <ui-section class="companies">
    <ui-h2>Наши партнеры</ui-h2>
    <el-scrollbar always>
      <div class="company__block">
        <template v-if="status === 'pending' || status === 'idle'">
          <div v-for="(item, index) in 9" :key="index" class="company__item">
            <el-skeleton style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" class="company__image" />
              </template>
            </el-skeleton>
          </div>
        </template>
        <template v-else-if="companies && companies.message.length > 0">
          <div
            v-for="company in companies.message"
            :key="company.imageUrl"
            class="company__item"
          >
            <nuxt-img
              fit="fill"
              :placeholder="[150, 150, 20, 3]"
              format="webp"
              class="company__image"
              :src="company.imageUrl"
              :alt="company.companyName"
            />
          </div>
        </template>
        <ui-error-fetch v-else-if="error" :error="error" :execute="execute" />
        <ui-empty v-else class="pl-[2px]" />
      </div>
    </el-scrollbar>
  </ui-section>
</template>

<style scoped lang="scss">
.company {
  &__block {
    @apply relative mb-3 flex gap-4 transition;
    @media (min-width: theme('screens.lg')) {
      @apply mb-0 grid grid-cols-3 gap-0;
      border: 1px solid $bgColor;
    }
    &::before {
      @apply hidden transition lg:block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid $bgColor;
      box-sizing: content-box;
    }
  }
  &__item {
    @apply w-1/2 shrink-0 transition-all;
    @media (min-width: theme('screens.lg')) {
      @apply flex w-full shrink items-center justify-center p-[50px];
      border: 1px solid $hintColor;
    }
    &:hover {
      .company {
        &__image {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }
  &__image {
    @apply h-12 w-full object-contain transition-all;
    filter: grayscale(1);
    opacity: 0.3;
  }
}
</style>
