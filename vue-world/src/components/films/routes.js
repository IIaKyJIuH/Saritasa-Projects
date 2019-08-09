export default [
  {
    path: '/films',
    name: 'Films',
    component: () => import('./films.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/films/:id',
    name: 'Film',
    component: () => import('./film.vue'),
  },
];
