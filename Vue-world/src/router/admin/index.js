import Admin from '@/admin/admin.vue';

const Films = () => import('@/components/films/films.vue');
const AdminFilmUpdate = () => import('@/admin/films/admin-film-update.vue');

export default [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
    children: [
      {
        path: '',
        redirect: 'films',
      },
      {
        path: 'films',
        name: 'Films',
        component: Films,
      },
      {
        path: 'films/:filmId',
        name: 'AdminFilmUpdate',
        component: AdminFilmUpdate,
      },
    ],
  },

];
