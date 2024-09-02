import type { Collapse, Popover, Tag } from './ui.models'

export type VacancyCard = {
  id: number
  min_salary: number
  max_salary?: number
  title: string
  tags: Tag[]
  tools: Popover[]
  about: Collapse[]
  link: string
}
