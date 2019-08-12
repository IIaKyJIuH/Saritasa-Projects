***REMOVED*** eslint-disable import/no-named-as-default***REMOVED***/
***REMOVED*** eslint-disable import/no-named-as-default-member***REMOVED***/
import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from '@/components/home.vue';
import authRoutes from '@/auth/routes';
import filmsRoutes from '@/components/films/routes';

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
  ],
});

***REMOVED**** Auth guard to check authentication.***REMOVED*****REMOVED***/
router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login');
  else next();
});

export default router;
