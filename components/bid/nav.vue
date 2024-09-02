<script setup lang="ts">
import { useSwiper } from 'swiper/vue'
import type { FormInstance } from 'element-plus'

const bid = useBidStore()
const { bidInfo, swiperRef } = storeToRefs(bid)
const props = defineProps<{
  el: FormInstance | undefined
}>()
const isLoading = ref(false)
const isEnd = computed(
  () => bidSwiper.value.isEnd && bidInfo.value.services.length > 0
)
const bidSwiper = useSwiper()

const prevSlide = () => {
  bidSwiper.value.slidePrev(500)
}

const formHandler = async (formEl?: FormInstance) => {
  if (!formEl) return
  isLoading.value = true
  try {
    await formEl.validate(valid => {
      if (!valid) {
        ElMessage.error('Ошибка отправки, проверьте форму.')
        return
      }
      if (isEnd.value) {
        ElMessage({ message: 'Запрос на сервер' })
        // Здесь можно добавить логику отправки запроса на сервер.
      } else {
        useScrollToElement(swiperRef)
        bidSwiper.value.slideNext(500)
      }
    })
  } catch (error) {
    ElMessage.error('Ошибка работы валидации')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="nav">
    <div v-if="!bidSwiper.isBeginning" class="flex-grow">
      <el-button type="primary" @click="prevSlide"> назад </el-button>
    </div>

    <el-button
      :loading="isLoading"
      @click="formHandler(props.el)"
      type="primary"
    >
      {{ isEnd ? 'Отправить' : 'Продолжить' }}
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.nav {
  @apply mt-5 flex w-full items-center justify-end gap-4 sm:mt-0;
}
</style>
