export default [
  {
    path: '/films',
    name: 'Films',
    component: () => import('./films'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: ':id',
        name: 'Film',
        component: () => import('./film'),
      },
    ],
  },
];
