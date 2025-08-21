import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from '../utils/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: getRoutes(),
})

export default router
