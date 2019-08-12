import Login from '@/auth/login.vue';
import Registration from '@/auth/registration.vue';

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
