/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import '@/styles/main.sass'

// const app = createApp(App)
// // 現在是 async 會有延遲
// registerPlugins(app)
// app.mount('#app')

// 新用法立刻執行 function ---> (function(){})()
(async () => {
  const app = createApp(App)

  await registerPlugins(app)

  app.mount('#app')
})()
