// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/content"],
  app: {
      head: {
        link: [
          { rel: "icon", type: "image/png", href: "https://firebasestorage.googleapis.com/v0/b/stdubteam-website.appspot.com/o/webassets-webp%2Ffavicon.png?alt=media" }
        ]
    }
  }
})