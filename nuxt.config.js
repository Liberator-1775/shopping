export default {
  mode: 'spa',
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#2564A3' },
  /*
   ** Global CSS
   */
  css: ['~assets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/draggable.js',
    { src: '~plugins/localStorage.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  proxy: ['http://localhost:3000/api'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { css: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/items'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/.netlify/functions/signin',
            method: 'post',
            propertyName: 'token.accessToken'
          },
          logout: false,
          user: false
        }
      }
    },
    localStorage: false
  },

  router: {
    middleware: ['auth']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  pwa: {
    meta: {
      ogHost: 'https://jjw-shopping.herokuapp.com/',
      ogImage: '/icon.png',
      twitterCard: 'summary_large_image',
      mobileAppIOS: true
    },
    manifest: {
      display: 'fullscreen'
    }
  },

  generate: {
    fallback: true
  }
}
