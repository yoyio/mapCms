import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/addView.vue')
    },
    {
      path: '/check/:id',
      name: 'check',
      component: () => import('../views/checkView.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/personalView.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/editView.vue')
    },
    {
      path: '/compiler/:id',
      name: 'compiler',
      component: () => import('../views/compilerView.vue')
    }
  ]
})

export default router
