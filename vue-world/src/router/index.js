import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import store from '@/store/store';

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
***REMOVED*****REMOVED*****REMOVED***
    {
      path: '/home',
      name: 'Home',
      component: Home,
***REMOVED*****REMOVED*****REMOVED***
    ...authRoutes,
    ...filmsRoutes,
    ...charactersRoutes,
    ...adminRoutes,
  ],
});

***REMOVED**** Auth guard to check authentication.***REMOVED*****REMOVED***/
router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  store.dispatch('setAuthStatus', !!currentUser);
  const isAdmin = !store.getters.isAdmin;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);
  // console.log(`${isAdmin}__req-${requiresAdmin}`);

  if ((requiresAuth || requiresAdmin) && !currentUser) next('/login');
  if (requiresAdmin && !isAdmin) next('/home');
  else next();
});

export default router;
