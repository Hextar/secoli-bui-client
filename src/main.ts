import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueLazyLoad from 'vue3-lazyload'
import './assets/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(store)
app.use(VueLazyLoad)

app.mount('#app')