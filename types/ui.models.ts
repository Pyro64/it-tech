// Навигация
const navPagesMap = {
  home: { href: '/', name: 'Главная' },
  project: { href: '/proekty', name: 'Проекты' },
  services: { href: '/uslugi', name: 'Услуги' },
  brif: { href: '/zayavka', name: 'Заполнить брифинг', },
  about: { href: '/o-nas', name: 'О нас' },
  contacts: { href: '/kontakty', name: 'Контакты' },
  vacancies: { href: '/vakansii', name: 'Вакансии' },
  articles: { href: '/stati', name: 'Статьи' },
}

type NavTypeMap = typeof navPagesMap
type NavTypeKeys = keyof NavTypeMap
type NavPageValue<K extends NavTypeKeys = NavTypeKeys> = NavTypeMap[K]

export type NavLink = {
  [K in NavTypeKeys]: {
    href: NavPageValue<K>['href']
    name: NavPageValue<K>['name']
    blank?: boolean
  }
}[NavTypeKeys]

export type NavFooter = {
  subtitle: string
  links: NavLink[]
}

export type Breadcrumb = {
  name: string
  href?: string
}

export type Collapse = {
  title: string
  text: string
}

export type Anchor = {
  name: string
  href: string
}

export type Popover = {
  title: string
  description: string
  image: string
}
export type Tool = Popover & {
  link: string
}
export type Tag = string
