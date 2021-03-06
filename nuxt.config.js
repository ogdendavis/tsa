
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Trump Supporters Aren\'t...',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Documented examples of Trump\'s racism, homophobia, misogyny, ableism, fascist tendencies, and lies.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/global.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  /*
  ** Router extension
  */
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'noSuchRoute',
          path: '*',
          component: resolve(__dirname, 'pages/404.vue'),
        },
        {
          name: 'racist',
          path: '/racist',
          component: resolve(__dirname, 'pages/index.vue'),
        },
        {
          name: 'homophobic',
          path: '/homophobic',
          component: resolve(__dirname, 'pages/index.vue'),
        },
        {
          name: 'liar',
          path: '/liars',
          component: resolve(__dirname, 'pages/index.vue'),
        },
        {
          name: 'misogynist',
          path: '/misogynist',
          component: resolve(__dirname, 'pages/index.vue'),
        },
        {
          name: 'ableist',
          path: '/ableist',
          component: resolve(__dirname, 'pages/index.vue'),
        },
        {
          name: 'fascist',
          path: '/fascists',
          component: resolve(__dirname, 'pages/index.vue'),
        },
      );
    },
  },
}
