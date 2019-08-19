import Admin from '@/admin/admin.vue';

const Films = () => import('@/components/films/films.vue');
const AdminFilmUpdate = () => import('@/admin/films/admin-film-update.vue');

export default [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true,
 ***REMOVED*****REMOVED***
    children: [
      {
        path: '',
        redirect: 'films',
   ***REMOVED*****REMOVED***
      {
        path: 'films',
        name: 'Films',
        component: Films,
   ***REMOVED*****REMOVED***
      {
        path: 'films/:filmId',
        name: 'AdminFilmUpdate',
        component: AdminFilmUpdate,
   ***REMOVED*****REMOVED***
    ],
***REMOVED***

];
