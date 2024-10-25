// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/pages/Landing.vue';
import AppLayout from '../layout/AppLayout.vue';
import Login from '../views/pages/Login.vue';
import Dashboard from '../views/pages/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: AppLayout,
    children: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter: (to, from, next) => {
                if (isAuthenticated()) {
                    next();
                } else {
                    alert('Login First');
                    next('auth/login');
                }
            }
        },
        {
            path: '/dashboard/crud',
            name: 'crud',
            component: () => import('@/views/pages/Crud.vue')
        },
        {
            path: '/dashboard/user',
            name: 'user',
            component: () => import('@/views/pages/user.vue')
        }
    ]
}
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
