import { defineStore } from 'pinia'
import type { BidInfo } from '~/types/bid.models'
import type { ServiceBid, ServiceTypeKeys } from '~/types/service.models'
import { useServiceStore } from '~/stores/service'

export const useBidStore = defineStore('bid', () => {
  const serviceStore = useServiceStore()
  const { servicesKeys, services } = serviceStore
  const bidInfo = ref<BidInfo>({
    organization: '',
    phone: '',
    name: '',
    email: '',
    industry: '',
    services: [],
  })

  const swiperRef = ref<HTMLElement | null>(null)
  const bidPersonal = computed(() => {
    const { services, ...rest } = bidInfo.value
    return rest
  })

  const formattedServices = computed(() => {
    return servicesKeys.reduce((acc, type) => {
      acc[type] = bidInfo.value.services.includes(type) ? services[type] : null
      return acc
    }, {} as Record<ServiceTypeKeys, ServiceBid[ServiceTypeKeys] | null>)
  })

  const submissionData = computed(() => {
    return {
      personal: bidPersonal.value,
      ...formattedServices.value,
    }
  })

  const totalPrice = computed(() => {
    return Object.values(submissionData.value).reduce((sum, service) => {
      if (service && 'price' in service) {
        sum += service.price
      }
      if (service) {
      // Проверка вложенных объектов внутри "site"
        if ('type' in service) {
          sum += service.type.price
        }
        if ('types' in service) {
          service.types.map((e) => sum += e.price)
        }
        if ('additions' in service) {
          service.additions.map((e) => sum += e.price)
        }
      }

      return sum
    }, 0)
  })

  return { bidInfo, bidPersonal, totalPrice, submissionData, swiperRef }
})
