import { createWebHistory, createRouter } from "vue-router";
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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;