import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectView from '../views/ProjectView.vue'
import MusicView from '../views/MusicView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/projects',
      name: '/projects',
      component: ProjectsView,
      children: [
        {
          path: '/projects:projectId',
          name: 'projects:projectId',
          component: ProjectView
        }
      ]
    },
    {
      path: '/music',
      name: '/music',
      component: MusicView
    }
  ]
})

export default router
