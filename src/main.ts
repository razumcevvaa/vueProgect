import { createApp } from 'vue'
import './style.css'
import App from '#root/App.vue'
import {router} from '#root/routes'

const app = createApp(App)
app.use(router)
app.mount('#app')