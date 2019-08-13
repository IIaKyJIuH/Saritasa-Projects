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
        name: 'AdminFilms',
        component: () => import('@/admin/films/admin-films.vue'),
      },
      {
        path: 'films/:filmId',
        name: 'AdminFilmUpdate',
        component: () => import('@/admin/films/admin-film-update.vue'),
      },
    ],
  },

];
