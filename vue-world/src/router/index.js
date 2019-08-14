import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from '@/components/home.vue';
import authRoutes from '@/core/auth/routes';
import filmsRoutes from '@/components/films/routes';
import charactersRoutes from '@/components/characters/routes';
import adminRoutes from '@/admin/routes';

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
    ...adminRoutes,
  ],
});

/** Auth guard to check authentication.  */
router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if ((requiresAuth || requiresAdmin) && !currentUser) next('/login');
  else next();
});

export default router;
