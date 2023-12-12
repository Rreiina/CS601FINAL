import { createRouter, createWebHistory } from 'vue-router'
//  connect all pages 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/hobby',
      name: 'hobby',
      component: () => import('../views/HobbyView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/hiking',
      name: 'hiking',
      component: () => import('../views/hiking.vue')
    },

  ]
})


export default router
