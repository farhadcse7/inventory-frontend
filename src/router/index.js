import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue';
import AuthLayout from '../layouts/AuthLayout.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: DefaultLayout,
      meta: { requiresAuth: true },
      children: [
        { path: '/dashboard', name: 'dashboard', component: () => import('@/views/Dashboard.vue') }
      ]
    },
    {
      path: '/auth',
      redirect: '/login',
      component: AuthLayout,
      meta: { isGuest: true},
      children: [
        { path: '/login', name: 'login', component: () => import('@/views/Auth/Login.vue') }
      ]
    }
  ]
})

// middleware
router.beforeEach((to,form,next) => {
  if(to.meta.requiresAuth && !localStorage.getItem('token')){
    next({name: 'login'});
  }else if(to.meta.isGuest && localStorage.getItem('token')){
    next({name: 'dashboard'})
  }else{
    next();
  }
})


export default router
