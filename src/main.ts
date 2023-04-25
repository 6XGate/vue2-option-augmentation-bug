import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import type { RouteConfig } from 'vue-router'

Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')

declare module 'vue' {
  interface ComponentCustomOptions {
    funcOption?: (route: RouteConfig[]) => Record<string, string>
    dataOption?: unknown
  }
}
