import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue3-lazyload'
import FloatingVue from 'floating-vue'

// CSS imports
import './assets/styles/index.scss'
import 'floating-vue/dist/style.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(FloatingVue, {
  themes: {
    'secoli-bui': {
      '$extend': 'tooltip',
      triggers: ['hover', 'click', 'touch'],
      distance: 6,
    },
  },
})
app.use(VueAxios, axios)
app.use(VueLazyLoad)

app.mount('#app')