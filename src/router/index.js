import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import ShowPosts from '@/views/posts/ShowPosts.vue'
import CreatePosts from '@/views/posts/CreatePosts.vue'
import EditPosts from '@/views/posts/EditPosts.vue'

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
      path: '/Blog',
      name: 'Blog',
      component: BlogView,
    },
    {
      path: '/ShowBlog/:id',
      name: 'ShowBlog',
      component: ShowPosts,
      props: true
    },
    {
      path: '/CreatePost',
      name: 'CreatePost',
      component: CreatePosts,
    },
    {
      path: '/EditPost/:id',
      name: 'EditPost',
      component: EditPosts,
    }
  ],
})

export default router
