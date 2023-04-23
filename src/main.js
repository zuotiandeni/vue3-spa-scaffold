import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/assets/css/reset.less'

import App from './App.vue'

import router from './router'
import store from './store'

// createApp(App).use(router).use(store).mount('#app')

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
