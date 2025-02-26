import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CreatePosts from '@/views/posts/CreatePosts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/Create',
      name: 'Create',
      component: CreatePosts,
    },
  ],
})

export default router
