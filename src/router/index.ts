import AvatarPage from '../views/avatar-page/AvatarPage.vue'
import ErrorPage from '../views/ErrorPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AvatarPage
    },
    {
      path:'/:path(.*)*',
      name: "error",
      component: ErrorPage
    },
  ]
})

export default router
