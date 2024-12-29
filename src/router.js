import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

const routes = [
  {
    path: '/',
    component: defineAsyncComponent({
      loader: () => import('./pages/Home.vue'),
      loadingComponent: LoadingSpinner,
      delay: 200
    })
  },
  {
    path: '/projects',
    component: defineAsyncComponent({
      loader: () => import('./pages/Projects.vue'),
      loadingComponent: LoadingSpinner,
      delay: 200
    })
  },
  {
    path: '/blog',
    component: () => import('./pages/Blog.vue')
  },
  {
    path: '/talks',
    component: () => import('./pages/Talks.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
}) 