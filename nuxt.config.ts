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
    defaults: {
      nuxtLink: {
        prefetch: true,
        prefetchOn: { visibility: false, interaction: true },
      },
    },
  },

  routeRules: {
    '/': {
      prerender: true,
      cache: {
        maxAge: 120,
        staleMaxAge: 86400, // сутки
        swr: true,
      },
    },
    '/proekty': {
      prerender: true,
      cache: {
        maxAge: 120,
        staleMaxAge: 86400,
        swr: true,
      },
    },
    '/stati': {
      prerender: true,
      cache: {
        maxAge: 120,
        staleMaxAge: 86400,
        swr: true,
      },
    },
    '/uslugi': {
      prerender: true,
      cache: {
        maxAge: 120,
        staleMaxAge: 86400,
        swr: true,
      },
    },
    '/vakansii': {
      prerender: true,
      cache: {
        maxAge: 120,
        staleMaxAge: 86400,
        swr: true,
      },
    },
    '/kontakty': {
      prerender: true,
      cache: {
        maxAge: 120,
        staleMaxAge: 86400,
        swr: true,
      },
    },
    '/o-nas': {
      prerender: true,
      cache: {
        maxAge: 120,
        staleMaxAge: 86400,
        swr: true,
      },
    },
    '/zayavka': {
      ssr: false,
      cache: {
        maxAge: 120,
        staleMaxAge: 86400,
        swr: true,
      },
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
    url: `https://pro-joy.tech/`,
    name: `${process.env.SITE_NAME}`,
    cacheMaxAgeSeconds: 86_400, // сутки
    indexable: true,
  },

  // sitemap: {
  //   // exclude static pages
  //   excludeAppSources: ['nuxt:pages'],
  // },
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
      url: `https://pro-joy.tech/`,
      logo: `https://pro-joy.tech/logo.png`,
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

  compatibilityDate: '2024-08-26',
})
