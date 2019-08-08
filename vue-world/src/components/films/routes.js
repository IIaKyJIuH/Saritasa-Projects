import Film from './film.vue';
import Films from './films.vue';

export default [
  {
    path: '/films',
    name: 'Films',
    component: Films,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: ':id',
        name: 'Film',
        component: Film,
      },
    ],
  },
];
