import { screenWidth } from './utils/screen.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: ['class', '.dark'],
  theme: {
    screens: {
      sm: `${screenWidth.sm + 1}px`,
      md: `${screenWidth.md + 1}px`,
      lg: `${screenWidth.lg + 1}px`,
      xl: `${screenWidth.xl + 1}px`,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '15px',
      },
    },
    extend: {
      colors: {
        main: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bce3ff',
          300: '#8ed3ff',
          400: '#59b8ff',
          500: '#45a2ff',
          600: '#478fed',
          700: '#1463e1',
          800: '#174fb6',
          900: '#19458f',
          950: '#142b57',
        },
        semi: {
          '50': '#f2fbf9',
          '100': '#d4f3eb',
          '200': '#a9e6d8',
          '300': '#87d8c8',
          '400': '#49b8a6',
          '500': '#309c8c',
          '600': '#247d71',
          '700': '#20655c',
          '800': '#1e514c',
          '900': '#1d443f',
          '950': '#0b2826',
        },
        gray: {
          50: '#f3f3f3',
          100: '#efefef',
          200: '#C0C0C0',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#4c4d4f',
          950: '#18191B',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#dcdfe6',
          300: '#cbd5e1',
          400: '#6E7A86',
          500: '#64748b',
          600: '#3C454F',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#1D1E21',
        },
      },

      transitionProperty: {
        all: 'all',
      },
      transitionDuration: {
        DEFAULT: '380ms',
      },
      transitionTimingFunction: {
        custom: 'ease-in-out', // Задайте свою функцию ускорения по умолчанию
      },
    },
    fontFamily: {
      main: '\'Nunito Variable\', sans-serif',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}
