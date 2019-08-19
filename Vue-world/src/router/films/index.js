const Films = () => import('@/components/films/films.vue');
const Film = () => import('@/components/films/film.vue')

export default [
  {
    path: '/films',
    name: 'Films',
    component: Films,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/films/:filmId',
    name: 'Film',
    component: Film,
    meta: {
      requiresAuth: true,
    },
  },
];
