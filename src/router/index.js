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
    path: '/tp-01',
    name : 'Premier TP',
    component: () => import("../components/TP01.vue"),
  },
  {
    path: '/tp-02',
    name : 'Deuxième TP',
    component: () => import("../components/TP02.vue"),
  },
  {
    path: '/tp-03',
    name : 'Troisième TP',
    component: () => import("../components/TP03.vue"),
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