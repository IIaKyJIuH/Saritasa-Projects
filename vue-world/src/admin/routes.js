export default [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/admin/admin.vue'),
    meta: {
      requiresAdmin: true,
***REMOVED*****REMOVED*****REMOVED***
    children: [
      {
        path: '',
        redirect: 'films',
  ***REMOVED*****REMOVED*****REMOVED***
      {
        path: 'films',
        name: 'AdminFilms',
        component: () => import('@/admin/films/admin-films.vue'),
  ***REMOVED*****REMOVED*****REMOVED***
      {
        path: 'films/:filmId',
        name: 'AdminFilmUpdate',
        component: () => import('@/admin/films/admin-film-update.vue'),
  ***REMOVED*****REMOVED*****REMOVED***
    ],
***REMOVED***

];
