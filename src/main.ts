import { createApp } from 'vue'
import './style.css'
import App from '#root/App.vue'
import {router} from '#root/routes'
import {createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')