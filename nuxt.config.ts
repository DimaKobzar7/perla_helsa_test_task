// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Perla Helsa',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Piazzolla:ital,opsz,wght@1,8..30,500&display=swap',
        },
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
      ],

      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js',
        },
      ],
    },
  },
  css: ['assets/main.scss'],
});
