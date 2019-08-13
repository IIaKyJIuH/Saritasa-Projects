/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from '@/components/home.vue';
import authRoutes from '@/auth/routes';
import filmsRoutes from '@/components/films/routes';
import charactersRoutes from '@/components/characters/routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    ...authRoutes,
    ...filmsRoutes,
    ...charactersRoutes,
  ],
});

/** Auth guard to check authentication.  */
router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login');
  else next();
});

export default router;
