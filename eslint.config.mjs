// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    'vue/singleline-html-element-content-newline': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@stylistic/brace-style': 'off',
    '@stylistic/quote-props': 'off',
    '@stylistic/arrow-parens': 'off',
    '@stylistic/operator-linebreak': 'warn',
    '@stylistic/comma-dangle': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
