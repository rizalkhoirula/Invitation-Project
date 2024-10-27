// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/pages/Landing.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },

    

  // {
  //   path: '/dashboard',  
  //   name: 'Dashboard',
  //   component: Dashboard,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
