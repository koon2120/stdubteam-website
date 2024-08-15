// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/content"],
  app: {
      head: {
        link: [
          { rel: "preconnect", href: "https://fonts.googleapis.com"},
          { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
          { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap"},
        ]
    }
  },
  content: {
    contentHead: false,
    documentDriven: true
  }
})