// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  devtools: { enabled: true },
  compatibilityDate: "2024-11-26",
  css: ["@/assets/css/main.css"]
});
