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
    path: '/tp-04',
    name : 'Quatrième TP',
    component: () => import("../components/TP04.vue"),
  },
  {
    path: '/tp-05',
    name : 'Cinquième TP',
    component: () => import("../components/TP05.vue"),
  },
  {
    path: '/tp-06',
    name : 'Sixième TP',
    component: () => import("../components/TP06.vue"),
  },
  {
    path: '/tp-07',
    name : 'Septième TP',
    component: () => import("../components/TP07.vue"),
  },
  {
    path: '/tp-08',
    name : 'Huitième TP',
    component: () => import("../components/TP08.vue"),
  },
  {
    path: '/tp-09',
    name : 'Neuvième TP',
    component: () => import("../components/TP09.vue"),
  },
  {
    path: '/tp-10',
    name : 'Dixième TP',
    component: () => import("../components/TP10.vue"),
  },
  {
    path: '/tp-11',
    name : 'Onzième TP',
    component: () => import("../components/TP11.vue"),
  },
  {
    path: '/tp-12',
    name : 'Douzième TP',
    component: () => import("../components/TP12.vue"),
    children: [
      {
        path: ':id',
        name: 'item',
        component: () => import("../components/Item.vue"),
        props: (route) => ({ id: route.params.id, name: route.query.name }),
      },
    ],
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