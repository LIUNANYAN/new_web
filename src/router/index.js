import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParenterView from '../views/Parenter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Home',
      name: 'MyHome',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
        path: '/friend',
        name: 'friend',
        component: ParenterView
    },
    {
      path: '/element',
      name: 'element',
      component: () => import('../views/ElementPlusView.vue')
    },
    {
      path:'/web',
      name: 'web',
      component: ()=>import('../views/MyWeb.vue')
    },
    {
      path:'/login',
      name: 'login',
      component: ()=>import('../views/Login.vue')
    },
    {
      path:'/register',
      name:'register',
      component: ()=>import('../views/Login.vue')
    },
    {
      path: '/write',
      name: 'write',
      component: ()=>import('../views/Write.vue')
    },
    {
      path: '/write2',
      name: 'write2',
      component: ()=>import('../views/Write2.vue')
    }
  ]
})

export default router