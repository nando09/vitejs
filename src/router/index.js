import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/Index.vue'
import Dashboard from '../views/dashboard/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router