import { createWebHistory, createRouter, RouterScrollBehavior } from "vue-router";
import {
  Homepage,
  Events,
  NotFound
 } from "@/views";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  setTimeout(() => {
    if (to.hash) {
      const el = window.location.href.split('#')[1]
      if (el.length) {
        document?.getElementById(el)?.scrollIntoView({ behavior: 'smooth' })
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