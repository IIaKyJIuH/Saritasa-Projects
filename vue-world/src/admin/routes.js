export default [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/admin/admin.vue'),
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
        component: () => import('@/components/films/films.vue'),
      },
      {
        path: 'films/:filmId',
        name: 'AdminFilmUpdate',
        component: () => import('@/admin/films/admin-film-update.vue'),
      },
    ],
  },

];
