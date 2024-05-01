import AvatarPage from '../views/avatar-page/avatar-page.vue'
import LoadingPage from '../views/loading-page.vue'
import ErrorPage from '../views/error-page.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LoadingPage
    },
    {
      path:"/:avatar",
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
