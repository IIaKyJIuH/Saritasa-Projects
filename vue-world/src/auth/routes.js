import Login from './login.vue';
import Registration from './registration.vue';

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Registration,
  },
];
