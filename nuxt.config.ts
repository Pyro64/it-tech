// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    'nuxt-swiper',
    '@nuxt/icon',
  ],

  icon: {
    customCollections: [
      {
        prefix: 'local',
        dir: './assets/icons',
      },
    ],
  },
  // future: {
  //   compatibilityVersion: 4,
  // },

  experimental: {
    viewTransition: true,
    componentIslands: true,
    cookieStore: true,
  },

  routeRules: {
    '/': {
      prerender: true,
    },
    '/proekty': {
      prerender: true,
    },
    '/stati': {
      prerender: true,
    },
    '/uslugi': {
      prerender: true,
    },
    '/vakansii': {
      prerender: true,
    },
    '/kontakty': {
      prerender: true,
    },
    '/o-nas': {
      prerender: true,
    },
    '/zayavka': {
      ssr: false,
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      SITE_NAME: process.env.SITE_NAME,
      SITE_URL: process.env.SITE_URL,
    },
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/mixins.scss" as *;',
        },
      },
    },
  },

  css: ['~/assets/styles/global.scss'],

  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },

  elementPlus: {
    importStyle: 'scss',
    themes: ['dark'],
  },

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
  },

  image: {
    domains: ['https://s3.dev.joytech.store'],
    quality: 70,
    format: ['webp'],
    lazy: true,
  },

  devtools: { enabled: true },

  site: {
    // production URL
    url: ``,
    name: `${process.env.SITE_NAME}`,
    indexable: false,
  },
  ogImage: {
    defaults: {
      component: 'OgImage',
      emojis: 'twemoji',
    },
  },

  seoExperiments: {
    enabled: false,
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: `${process.env.SITE_NAME}`,
      url: `https://pyro-tech.vercel.app/`,
      logo: `https://pyro-tech.vercel.app/logo.png`,
    },
  },

  robots: {
    disallow: ['/lk'],
    allow: '/',
    groups: [
      {
        userAgent: ['Yandex'],
        cleanParam: ['param1', 'param2'],
      },
    ],
  },
})
