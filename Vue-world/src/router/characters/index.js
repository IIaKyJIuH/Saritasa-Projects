const Character = () => import('@/components/characters/character.vue');

export default [
  {
    path: '/films/:filmId/characters/:charId',
    name: 'Character',
    component: Character,
    meta: {
      requiresAuth: true,
 ***REMOVED*****REMOVED***
***REMOVED***
];
