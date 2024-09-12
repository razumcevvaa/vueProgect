import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '#root/pages/HomePage.vue'
import AboutPage from '#root/pages/AboutPage.vue'
import NewPage from '#root/pages/NewPage.vue'

const routes = [
  { path: '/vueProgect/', component: HomePage },
  { path: '/vueProgect/about', component: AboutPage },
  {path: '/vueProgect/new', component: NewPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}