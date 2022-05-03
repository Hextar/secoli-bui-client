import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import FloatingVue from 'floating-vue'
import VueAxios from 'vue-axios'
import { createMetaManager } from 'vue-meta'
import VueLazyLoad from 'vue3-lazyload'

// CSS imports
import './assets/styles/index.scss'
import 'floating-vue/dist/style.css'
import 'virtual:fonts.css'

const app = createApp(App)
app.use(createMetaManager())
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