import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "../public/pages/home.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../public/pages/about.component.vue')
    },
    {
      path: "/tutorials",
      name: "tutorials",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../appointment/pages/appointment.component.vue"),
    },
    {
      path: "/store",
      name: "store",
      component: ()=> import('../store/pages/store.component.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../public/pages/faq.component.vue')
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../public/pages/register.component.vue"),
    }
  ]
})

export default router
