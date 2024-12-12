import { createWebHistory, createRouter } from "vue-router";
import { auth } from "../firebase";

const router = createRouter({
  history: createWebHistory(),
  routes : [
  {
    path: '/',
    alias : '/home',
    name : 'Home',
    component: () => import("../components/views/Home.vue"),
  },
  {
    path: '/register',
    alias : '/register',
    name : 'Register',
    component: () => import("../components/views/RegisterPageView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/views/LoginPageView.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../components/views/DashboardView.vue"),
    meta: { requiresAuth: true }, // Route protégée
  },
  {
    path: '/interpolation',
    name : 'Interpolation',
    component: () => import("../components/lessons/LessonTextInterpolation.vue"),
  },
  {
    path: '/text-interpolation',
    name : 'Text Interpolation',
    component: () => import("../components/views/TextInterpolation.vue"),
  },
  {
    path: '/tp-01',
    name : 'Premier TP',
    component: () => import("../components/exercices/TP01.vue"),
  },
  {
    path: '/tp-02',
    name : 'Deuxième TP',
    component: () => import("../components/exercices/TP02.vue"),
  },
  {
    path: '/tp-03',
    name : 'Troisième TP',
    component: () => import("../components/exercices/TP03.vue"),
  },
  {
    path: '/tp-04',
    name : 'Quatrième TP',
    component: () => import("../components/exercices/TP04.vue"),
  },
  {
    path: '/tp-05',
    name : 'Cinquième TP',
    component: () => import("../components/exercices/TP05.vue"),
  },
  {
    path: '/tp-06',
    name : 'Sixième TP',
    component: () => import("../components/exercices/TP06.vue"),
  },
  {
    path: '/tp-07',
    name : 'Septième TP',
    component: () => import("../components/exercices/TP07.vue"),
  },
  {
    path: '/tp-08',
    name : 'Huitième TP',
    component: () => import("../components/exercices/TP08.vue"),
  },
  {
    path: '/tp-09',
    name : 'Neuvième TP',
    component: () => import("../components/exercices/TP09.vue"),
  },
  {
    path: '/tp-10',
    name : 'Dixième TP',
    component: () => import("../components/exercices/TP10.vue"),
  },
  {
    path: '/tp-11',
    name : 'Onzième TP',
    component: () => import("../components/exercices/TP11.vue"),
  },
  {
    path: '/tp-12',
    name : 'Douzième TP',
    component: () => import("../components/exercices/TP12.vue"),
    children: [
      {
        path: ':id',
        name: 'item',
        component: () => import("../components/shared/Item.vue"),
        props: (route) => ({ id: route.params.id, name: route.query.name }),
      },
    ],
  },
  {
    path : '/:pathMatch(.*)*',
    name : 'Not Found',
    component : () => import("../components/views/NotFound.vue"),
  },
]})


// Vérification avant chaque navigation
router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  console.log(currentUser);

  if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!currentUser) {
          next({ name: "Login" }); // Redirection vers la page de connexion si non authentifié
      } else {
          next();
      }
  } else {
      next();
  }
});
export default router;