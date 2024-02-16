export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: "Anoano",
      titleTemplate: "%s - Anoano",
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Caveat&display=swap",
        },
      ],
    },
  },
  plugins: [],
  typescript: { shim: false, typeCheck: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/content"],
});
