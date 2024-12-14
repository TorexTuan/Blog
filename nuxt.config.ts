// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxtjs/i18n"
  ],
  devtools: { enabled: true },
  compatibilityDate: "2024-11-26",
  css: ["@/assets/css/main.css"],
  icon: {
    serverBundle: {
      collections: ["tabler"]
    }
  },
  i18n: {
    vueI18n: "./i18n.config.ts"
  }
});
