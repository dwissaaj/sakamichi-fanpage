// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image','@nuxt/content','@nuxtjs/supabase','@nuxthq/studio','radix-vue/nuxt','@formkit/nuxt'],
  css: ['~/assets/css/main.css'],
 
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    domains: ['https://olteescxepgigyhfwcfw.supabase.co']
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/testing','/members', '/tutorials', '/translates','/register','/'],
    }
  },
  nitro: {
    scanDirs: ['~/server/*']
  },
  typescript: {
    typeCheck: true
  }
})