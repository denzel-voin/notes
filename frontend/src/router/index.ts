import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: HomeView,
      meta: {
        requiresAuth: false,
        onlyForGuests: true
      }
    },
    {
      path: '/',
      name: 'notes',
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: true,
        title: 'Мои заметки'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { requiresAuth: false }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  document.title = to.meta.title ? `${to.meta.title} | Мое приложение` : 'Мое приложение'

  if (to.meta.requiresAuth && !!authStore.isAuthenticated) {
    next({
      path: '/auth',
      query: { redirect: to.fullPath }
    })
    return
  }

  if (to.meta.onlyForGuests && !authStore.isAuthenticated) {
    next('/')
    return
  }

  next()
})

export default router
