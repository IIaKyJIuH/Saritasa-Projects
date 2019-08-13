export default [
  {
    path: '/films/:filmId/characters/:charId',
    name: 'Character',
    component: () => import('@/components/characters/character.vue'),
    meta: {
      requiresAuth: true,
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***
];
