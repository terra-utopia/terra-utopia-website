export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Terra Utopia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#AAB9F2' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'},
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['@nuxtjs/redirect-module', {  // https://github.com/nuxt-community/redirect-module
      rules: [

        /** enforce that browser's route path ends with a trailing slash */
        {
          from: /^([^\?#]+)(?<!\/)(\?.*$|#.*$|$)/,  // 1st bracket: the main url without '?' and '#'  // last group: end character of normal url ('?', '#' or END)  // negative lookbehind in the middle: matches missing trailing slash
          to: (from, req) => {
            const dummyOrigin = 'http://xxx';
            let url = new URL(dummyOrigin + req.url);
            url.pathname += '/';
            return url.href.substr(dummyOrigin.length);  // take full url with added trailing slash, but cut-off origin part a the front
          },
        },
      ],
    }],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  router: {
    middleware: [
      'enforce-routes',     // middleware/enforce-routes.js
    ],
  },

  build: {                                                              // quick fix for compile warning,
    babel: {                                                            // see https://stackoverflow.com/q/67350359
      plugins: [                                                        //
        ['@babel/plugin-proposal-private-methods', { loose: true }],    //
      ],                                                                //
    },                                                                  //
  },                                                                    //

};
