import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: '/',
    alias : '/home',
    name : 'Home',
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path : '/:pathMatch(.*)*',
    name : 'Not Found',
    component : () => import("../components/NotFound.vue"),
  },
  {
    path: '/interpolation',
    name : 'Interpolation',
    component: () => import("../components/LessonTextInterpolation.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;