/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from './router'
import pinia from './pinia'
import { useUserStore } from '@/stores/user'
import VImageInput from 'vue3-img-input'

export async function registerPlugins (app) {
  loadFonts()
  app.use(pinia)
  await useUserStore().getUser()
  // 抓完之後再註冊路由，就部會有時間差調整執行順序>main.js
  app.use(router)
  app.use(vuetify)
  app.component('VImageInput', VImageInput)
}
