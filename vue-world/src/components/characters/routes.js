export default [
  {
    path: '/films/characters/:id',
    name: 'Character',
    component: () => import('@/components/characters/character.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];
