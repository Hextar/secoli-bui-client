import { createWebHistory, createRouter } from "vue-router";
import Homepage from "@/views/Homepage.vue";
import Event from "@/views/Event.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/event:id",
    name: "Event",
    component: Event,
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