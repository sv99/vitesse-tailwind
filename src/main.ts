// register vue composition api globally
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createPinia } from 'pinia'

// your custom styles here
import './styles/main.css'

import App from './App.vue'

const app = createApp(App)

const head = createHead()
app.use(head)

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
