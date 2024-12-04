import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: '/',
    alias : '/home',
    name : 'Home',
    component: () => import("../components/Home.vue"),
  },
  {
    path: '/interpolation',
    name : 'Interpolation',
    component: () => import("../components/LessonTextInterpolation.vue"),
  },
  {
    path: '/text-interpolation',
    name : 'Text Interpolation',
    component: () => import("../components/TextInterpolation.vue"),
  },
  {
    path : '/:pathMatch(.*)*',
    name : 'Not Found',
    component : () => import("../components/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;