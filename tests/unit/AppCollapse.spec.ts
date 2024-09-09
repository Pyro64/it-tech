import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeAll } from 'vitest'
import { AppCollapse } from '#components'

beforeAll(() => {
  // Мокаем метод getContext для всех canvas элементов
  Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
    value: () => {
      return { fillRect: () => {} } // Можно добавить сюда методы контекста, если нужно
    },
  })
})

// Пример данных для тестирования
const faqMock = [
  { title: 'What is Nuxt?', text: 'Nuxt is a framework for Vue.js.' },
  { title: 'What is Vue?', text: 'Vue is a JavaScript framework.' },
]

describe('FaqComponent', () => {
  it('Отображает все элементы из props.faq', () => {
    const wrapper = mount(AppCollapse, {
      props: {
        faq: faqMock,
      },
    })

    const faqItems = wrapper.findAll('.block')
    expect(faqItems.length).toBe(faqMock.length)
  })

  it('Изначально все блоки закрыты', () => {
    const wrapper = mount(AppCollapse, {
      props: {
        faq: faqMock,
      },
    })

    const openItems = wrapper.findAll('.block.active')
    expect(openItems.length).toBe(0) // Все блоки должны быть закрыты
  })
})
