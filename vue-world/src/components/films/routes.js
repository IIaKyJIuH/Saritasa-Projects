export default [
  {
    path: '/films',
    name: 'Films',
    component: () => import('./films'),
    meta: {
      requiresAuth: true,
***REMOVED*****REMOVED*****REMOVED***
    children: [
      {
        path: ':id',
        name: 'Film',
        component: () => import('./film'),
  ***REMOVED*****REMOVED*****REMOVED***
    ],
***REMOVED***
];
