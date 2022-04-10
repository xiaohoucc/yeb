import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
