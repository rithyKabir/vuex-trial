import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import { createPinia } from 'pinia'


createApp(App).use(store).use(createPinia()).use(router).mount('#app')
