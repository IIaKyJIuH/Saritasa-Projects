***REMOVED*** eslint-disable import/no-unresolved***REMOVED***/
import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Login from '@/auth/the-login';
import Home from '@/components/the-home';
import Films from '@/components/films/the-films';
import Film from '@/components/films/film';
import Registration from '@/auth/the-registration';

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
    {
      path: '/login',
      name: 'Login',
      component: Login,
***REMOVED*****REMOVED*****REMOVED***
    {
      path: '/register',
      name: 'Registration',
      component: Registration,
***REMOVED*****REMOVED*****REMOVED***
    {
      path: '/films',
      name: 'Films',
      component: Films,
      meta: {
        requiresAuth: true,
  ***REMOVED*****REMOVED*****REMOVED***
      children: [
        {
          path: ':id',
          name: 'Film',
          component: Film,
    ***REMOVED*****REMOVED*****REMOVED***
      ],
***REMOVED*****REMOVED*****REMOVED***
  ],
});

router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login');
  else next();
});

export default router;
