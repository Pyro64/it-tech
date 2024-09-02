import { type Component } from 'vue'

export type ComplexityMap = {
  percentage: number
  text: string
  icon: Component
  color: string
}

export type Complexity = 'easy' | 'medium' | 'hard'

export type ArticleBase = {
  id: number
  created: string
  time: number
  title: string
  image: string
  seo_url: string
  subtitle?: string
  complexity: Complexity
}
export type ArticleCard = ArticleBase & {
  description: string
}

export type ArticleDetail = ArticleBase & {
  content: string
}
