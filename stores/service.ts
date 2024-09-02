import { defineStore } from 'pinia'
import type {
  ServiceBid,
  ServiceBidMapDesign,
  ServiceBidMapDev,
  ServiceTypeKeys,
} from '~/types/service.models'

export const useServiceStore = defineStore('service', () => {
  const siteMap: ServiceBidMapDev = {
    options: [
      { price: 150_000, value: 'Лендинг' },
      { price: 500_000, value: 'Корпоративный сайт' },
      { price: 300_000, value: 'Интернет-магазин' },
      { price: 1_000_000, value: 'Маркетплейс' },
      { price: 200_000, value: 'Блог' },
    ],
    additions: [
      { price: 50_000, value: 'Темная тема' },
      { price: 150_000, value: 'Локализация' },
      { price: 50_000, value: 'PWA' },
      { price: 150_000, value: 'Телегам бот' },
    ],
    get minPrice() {
      return siteMap.options.reduce((min, option) =>
        option.price < min.price ? option : min
      )
    },
  }
  const mobileMap: ServiceBidMapDev = {
    options: [
      { price: 500_000, value: 'Android' },
      { price: 600_000, value: 'IOS' },
      { price: 1_100_000, value: 'Обе платформы' },
    ],
    additions: [
      { price: 50_000, value: 'Темная тема' },
      { price: 150_000, value: 'Локализация' },
    ],
    get minPrice() {
      return mobileMap.options.reduce((min, option) =>
        option.price < min.price ? option : min
      )
    },
  }
  const designMap: ServiceBidMapDesign = {
    options: [
      { price: 150_000, value: 'Логотип' },
      { price: 300_000, value: 'Веб-дизайн' },
      { price: 500_000, value: 'Мобильный дизайн' },
      { price: 200_000, value: 'Брендбук' },
    ],
    get minPrice() {
      return designMap.options.reduce((min, option) =>
        option.price < min.price ? option : min
      )
    },
  }
  const services = ref<ServiceBid>({
    site: {
      title: 'Разработка сайта',
      type: siteMap.minPrice,
      additions: [],
      deadline: '', // | null
      like: '',
      functional: '',
      pages: '',
    },
    design: {
      title: 'Фирменный дизайн',
      goal: [],
      types: [designMap.minPrice],
      targetAudience: '',
      like: '',
      style: [],
      deadline: '', // | null
    },
    mobile: {
      title: 'Мобильное приложение',
      type: mobileMap.minPrice,
      additions: [],
      deadline: '', // | null
      like: '',
      functional: '',
      pages: '',
    },
    seo: {
      price: 100_000,
      title: 'SEO продвижение',
      targetAudience: '',
      competitors: '',
      description: '',
      siteLink: '',
      regions: '',
    },
    crm: {
      price: 500_000,
      title: 'CRM система',
      functional: '',
      goal: [],
      numberUser: 1,
      pages: '',
      integration: '',
      deadline: '', // | null
    },
    devops: {
      price: 500_000,
      title: 'DevOps',
      goal: [],
      infra: '',
      tools: '',
      integraions: '',
      logging: [],
      description: '',
      problems: '',
      security: []
    },
  })
  const servicesKeys: ServiceTypeKeys[] = [
    'site',
    'design',
    'mobile',
    'seo',
    'crm',
    'devops',
  ]
  const servicesCheckbox = computed(() =>
    Object.entries(services.value).map(([type, service]) => ({
      type,
      title: service.title,
    }))
  )

  return {
    servicesCheckbox,
    services,
    servicesKeys,
    designMap,
    siteMap,
    mobileMap,
  }
})
