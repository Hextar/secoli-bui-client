import { createWebHistory, createRouter, RouterScrollBehavior } from 'vue-router'
import {
  Homepage,
  EventDetail,
  NotFound
 } from '@/views';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/events',
    name: 'Events',
    component: EventDetail,
    children: [
      {
        path: '/events/past',
        name: 'EventDetail',
        component: EventDetail,
        children: [
          {
            path: '/events/past/:title',
            name: 'EventDetail',
            component: EventDetail,
          }
        ]
      },
      {
        path: '/events/future',
        name: 'EventDetail',
        component: EventDetail,
        children: [
          {
            path: '/events/future/:title',
            name: 'EventDetail',
            component: EventDetail,
          }
        ]
      }
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: "NotFound",
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  },
];

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  setTimeout(() => {
    if (to.params.silently) { return }
    if (to.hash) {
      const el = window.location.href.split('#')[1]
      if (el.length) {
        const elTop = document?.getElementById(el)?.getBoundingClientRect().top || 0
        const windowTop = window.pageYOffset
        window?.scrollTo({top: elTop + windowTop - 60, behavior: 'smooth'})
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      const app = document.getElementById('app')
      app?.scrollIntoView({ behavior: 'smooth' })
    }
  }, 150)
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
});

export default router;