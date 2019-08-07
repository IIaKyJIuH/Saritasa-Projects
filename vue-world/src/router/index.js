import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Login from '../auth/login.vue';
import Home from '../components/home.vue';
import Films from '../components/films/films.vue';
import Film from '../components/films/film.vue';
import Registration from '../auth/registration.vue';

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
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/films',
      name: 'Films',
      component: Films,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: ':id',
          name: 'Film',
          component: Film,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login');
  else next();
});

export default router;
