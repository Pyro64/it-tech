import type { Bar } from './chart.models'
import type { Collapse, Popover, Tool } from './ui.models'
// Карты
const serviceMap = {
  site: {
    title: 'Разработка сайта',
    seo_url: 'razrabotka-sajta',
  },
  mobile: {
    title: 'Мобильное приложение',
    seo_url: 'mobilnoe-prilozhenie',
  },
  crm: {
    title: 'CRM система',
    seo_url: 'crm-sistema',
  },
  design: {
    title: 'Фирменный дизайн',
    seo_url: 'firmennyj-dizajn',
  },
  seo: {
    title: 'SEO продвижение',
    seo_url: 'seo-prodvizhenie',
  },
  devops: {
    title: 'DevOps',
    seo_url: 'devops',
  },
} as const

export type ServiceBid = {
  site: ServiceBidSite
  seo: ServiceBidSeo
  design: ServiceBidDesign
  devops: ServiceBidDevops
  crm: ServiceBidCrm
  mobile: ServiceBidMobile
}
// Общие типы
type ServiceTypeMap = typeof serviceMap
export type ServiceTypeKeys = keyof ServiceTypeMap
type ServiceValue<K extends ServiceTypeKeys = ServiceTypeKeys> =
  ServiceTypeMap[K]

export type ServiceSearch = {
  title: ServiceValue['title']
  link: string
}

// Запросы
type ServiceBaseRequest = {
  id: number
  title: ServiceValue['title']
  seo_url: ServiceValue['seo_url']
  text: string
}
export type ServiceCard = ServiceBaseRequest & {
  svg: string
}
export type ServiceDetail = ServiceBaseRequest & {
  faq: Collapse[]
  tools: Tool[]
  banner: {
    image: string
  }
}

// Проекты
export type ServiceProjectCard = {
  title: ServiceValue['title']
  tools: Popover[]
}
type ServiceProjectBase = {
  name: string
  text: string
  anchor_link: string
}
export type ServiceProjectSite = ServiceProjectBase & {
  tools: Popover[]
  info: Collapse[]
}
export type ServiceProjectMobile = ServiceProjectBase & {
  tools: Popover[]
  info: Collapse[]
}
export type ServiceProjectCrm = ServiceProjectBase & {
  tools: Popover[]
  info: Collapse[]
}
export type ServiceProjectDesign = ServiceProjectBase & {
  fonts: {
    id: number
    font: string
    weight: number
    size: number
  }[]
  colors: string[]
  images: string[]
}
export type ServiceProjectSeo = ServiceProjectBase & {
  data: Bar[]
}
export type ServiceProjectDevops = ServiceProjectBase & {
  data: Bar[]
}
// Заявка

export type ServiceOption = {
  price: number
  value: string
}
export type ServiceBidBase<K extends ServiceTypeKeys> = {
  title: ServiceValue<K>['title']
  price: number
}
export type ServiceBidSite = {
  title: ServiceValue<'site'>['title']
  type: ServiceOption
  additions: ServiceOption[]
  deadline: string
  like: string
  functional: string
  pages: string
}
export type ServiceBidCrm = ServiceBidBase<'crm'> & {
  goal: string[]
  functional: string
  numberUser: number
  pages: string
  integration: string
  deadline: string
}
export type ServiceBidDesign = {
  title: ServiceValue<'design'>['title']
  types: ServiceOption[]
  goal: string[]
  targetAudience: string
  like: string
  style: string[]
  deadline: string
}
export type ServiceBidMobile = {
  title: ServiceValue<'mobile'>['title']
  type: ServiceOption
  additions: ServiceOption[]
  deadline: string
  like: string
  functional: string
  pages: string
}
export type ServiceBidSeo = ServiceBidBase<'seo'> & {
  targetAudience: string
  competitors: string
  description: string
  siteLink: string
  regions: string
}
export type ServiceBidDevops = ServiceBidBase<'devops'> & {
  goal: string[]
  infra: string
  tools: string
  integraions: string
  logging: string[]
  description: string
  problems: string
  security: string[]
}

export type ServiceBidMapBase = {
  options: ServiceOption[]
  minPrice: ServiceOption
}
export type ServiceBidMapDesign = ServiceBidMapBase

export type ServiceBidMapDev = ServiceBidMapBase & {
  additions: ServiceOption[]
}
