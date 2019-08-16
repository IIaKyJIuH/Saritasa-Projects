import Login from '@/core/auth/login.vue';
import Registration from '@/core/auth/registration.vue';

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
