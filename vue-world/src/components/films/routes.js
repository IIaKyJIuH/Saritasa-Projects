export default [
  {
    path: '/films',
    name: 'Films',
    component: () => import('./films.vue'),
    meta: {
      requiresAuth: true,
***REMOVED*****REMOVED*****REMOVED***
    children: [
      {
        path: ':id',
        name: 'Film',
        component: () => import('./film.vue'),
  ***REMOVED*****REMOVED*****REMOVED***
    ],
***REMOVED***
];
