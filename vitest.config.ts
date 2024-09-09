import { defineVitestConfig } from '@nuxt/test-utils/config'
import dotenv from 'dotenv'

// Загружаем переменные окружения
dotenv.config()

export default defineVitestConfig({
  define: {
    'process.env': process.env
  },
  test: {
    setupFiles: ['./vitest.setup.ts'],
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        }
      }
    },
    deps: {
      inline: ['vitest-canvas-mock'],
    },
  }
})
