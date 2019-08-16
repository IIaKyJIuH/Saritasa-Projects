import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import store from '@/store/store';

import Home from '@/components/home.vue';
import authRoutes from '@/router/auth';
import filmsRoutes from '@/router/films';
import charactersRoutes from '@/router/characters';
import adminRoutes from '@/router/admin';

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
  store.dispatch('setAuthStatus', !!currentUser);
  const { isAdmin } = store.getters;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if ((requiresAuth || requiresAdmin) && !currentUser) next('/login');
  if (currentUser && requiresAdmin && !isAdmin) {
    next('/films');
    alert('click on admin nav button');
  } else next();
});

export default router;
