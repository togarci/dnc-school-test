// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', 'nuxt-swiper'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/style/global.css'],
  app: {
    head: {
      title: 'DNC - Teste Técnico',
      link: [
        {
          href: 'https://cdn.lineicons.com/4.0/lineicons.css',
          rel: 'stylesheet',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
});
