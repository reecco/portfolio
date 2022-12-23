import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact/Contact.vue')
  },
  {
    path: '/activity-github',
    name: 'activity-github',
    component: () => import('../views/GitHub/GitHub.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
