import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue'),
    meta: { title: 'About & CV' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('./pages/Projects.vue'),
    meta: { title: 'Projects' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('./pages/Blog.vue'),
    meta: { title: 'Blog' }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('./pages/BlogPost.vue'),
    meta: { title: 'Blog Post' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./pages/Contact.vue'),
    meta: { title: 'Contact' }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  const baseTitle = 'Giacomo Leo | Analytics Engineer'
  document.title = to.meta.title ? `${to.meta.title} | ${baseTitle}` : baseTitle
})