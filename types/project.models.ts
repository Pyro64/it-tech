import type { ServiceProjectCard } from './service.models'

export type Project = {
  id: number
  title: string
  description: string
  logo: string
  seo_url: string
}
export type ProjectCard = Project & {
  services: ServiceProjectCard[]
}

export type ProjectDetail = Project & {
  image: string
  links: {
    name: string
    href: string
  }[]
}
