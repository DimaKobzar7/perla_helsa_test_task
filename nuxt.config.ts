// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      //  подключило, лучше оставить так чем в компоненте
      link: [
        //   { rel: 'stylesheet', href: '/assets/main.scss' },
        //   { rel: 'stylesheet', href: '~/layouts/global.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Piazzolla:ital,opsz,wght@1,8..30,500&display=swap' },
      ],
      // CSS: [],
      script: [{ src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js' }],
    },
  },
  css: ['assets/main.scss', '~/layouts/global.css'],
  //   app: {
  //     head: {
  //       link: [{ rel: 'stylesheet', href: 'bootstrap/dist/css/bootstrap.min.css' }],
  //       script: [{ src: 'script.js' }],
  //     },
  //   },

  //   app: {
  //     head: {
  //       // опять ошибка с уголком
  //       link: [{ rel: 'application/javascript', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js' }],
  //       script: [{ src: 'script.js' }],
  //     },
  //   },
  // css: ["./layouts/global.css"],
  //   css: ['~/layouts/global.css'],
  // module.exports = {
  //   css: [
  //     '~/assets/fonts/roboto.css',
  //     '~/assets/css/styles.css'
  //   ]
  // }
  //   не работает
  //   app: {
  //     head: {
  //       link: [{ rel: 'stylesheet', href: 'bootstrap/dist/css/bootstrap.min.css' }],
  //       script: [{ src: 'script.js' }],
  //     },
  //   },
  //   не работает
  //   app: {
  //     head: {
  //       css: ['bootstrap/dist/css/bootstrap.min.css', '~/layouts/global.css'],
  //       script: [{ src: 'script.js' }],
  //     },
  //   },
  //   это работает но неясно как скрипты поставить
  //   css: ['bootstrap/dist/css/bootstrap.min.css', '~/layouts/global.css'],
  //   css: ['bootstrap/scss/bootstrap.scss', '~/layouts/global.css'],
  //   work делай свой файл scss и туда импорти стили бутстрапа!!!!!!!!!!!
  //   css: ['bootstrap/scss/bootstrap.scss'],
  //   app: {
  //     head: {
  //       script: [
  //         // хоть и без ошибки но скрипт не работает
  //         {
  //           src: 'bootstrap/dist/js/bootstrap.bundle.min.js',
  //         },
  //       ],
  //     },
  //   },
  //   это основа
  // css: ['assets/main.scss', '~/layouts/global.css'],
  //   modules: ['bootstrap'],
  //   modules: ['bootstrap/dist/js/bootstrap.bundle.min.js'],
  //   plugins: [{ src: 'bootstrap/dist/js/bootstrap.bundle.min.js' }],
  //   script: [
  //     {
  //       src: 'bootstrap/dist/js/bootstrap.bundle.min.js',
  //     },
  //   ],
  //   vite: {
  //     define: {
  //       'process.env.DEBUG': false,
  //     },
  //   },
  //   vite: {
  //     css: {
  //       preprocessorOptions: {
  //         scss: {
  //           additionalData: '@import "@assets/_mixins.scss"',
  //         },
  //       },
  //     },
  //     define: {
  //       'process.env.DEBUG': false,
  //     },
  //   },
});

// Piazzolla есть в google fonts но не смог ее оттуда подключить
