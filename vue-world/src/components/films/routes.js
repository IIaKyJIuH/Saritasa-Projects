export default [
  {
    path: '/films',
    name: 'Films',
    component: () => import('@/components/films/films.vue'),
    meta: {
      requiresAuth: true,
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***
  {
    path: '/films/:filmId',
    name: 'Film',
    component: () => import('@/components/films/film.vue'),
    meta: {
      requiresAuth: true,
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***
];
