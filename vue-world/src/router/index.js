import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Films from '@/components/Films'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/films',
      name: 'Films',
      component: Films,
      meta: {
          requiresAuth: true
      },
      children: [
        {
          path: ':id',
          name: 'Film',
          component: Films
        }
      ]
    }
  ]
})
