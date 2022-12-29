export default defineNuxtConfig({
  telemetry: false,
  app: {
    head: {
      title: 'Anoano',
      titleTemplate: '%s - Anoano',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Caveat&display=swap" }
      ],
    },
  },
  plugins: [],
  typescript: { shim: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content']
})
