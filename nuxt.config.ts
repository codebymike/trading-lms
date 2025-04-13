// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/ui',
    '@prisma/nuxt',
    'nuxt-auth-utils'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    githubId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
    githubSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,
  }
})