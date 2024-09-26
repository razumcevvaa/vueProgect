import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '#root/pages/HomePage.vue'
import CardGamePage from '#root/pages/CardGamePage.vue'
import NewPage from '#root/pages/NewPage.vue'

const routes = [
  { path: '/vueProgect/', component: HomePage },
  { path: '/vueProgect/cardGame', component: CardGamePage },
  {path: '/vueProgect/new', component: NewPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}