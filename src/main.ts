import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRoutes from '~pages'
import type { RouterScrollBehavior } from 'vue-router'

import '@unocss/reset/tailwind.css'
import '~/assets/styles/index.scss'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  setTimeout(() => {
    if (to.params.silently) { return }
    if (to.hash) {
      const el = window.location.href.split('#')[1]
      if (el.length) {
        const elTop = document?.getElementById(el)?.getBoundingClientRect().top || 0
        const windowTop = window.pageYOffset
        window?.scrollTo({ top: elTop + windowTop - 60, behavior: 'smooth' })
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      const app = document.getElementById('app')
      app?.scrollIntoView({ behavior: 'smooth' })
    }
  }, 150)
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
