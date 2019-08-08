export default [
  {
    path: '/films',
    name: 'Films',
    component: () => import('./films.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: ':id',
        name: 'Film',
        component: () => import('./film.vue'),
      },
    ],
  },
];
