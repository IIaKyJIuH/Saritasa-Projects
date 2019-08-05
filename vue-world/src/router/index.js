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
***REMOVED*****REMOVED*****REMOVED***
    {
      path: '/home',
      name: 'Home',
      component: Home
***REMOVED*****REMOVED*****REMOVED***
    {
      path: '/login',
      name: 'Login',
      component: Login
***REMOVED*****REMOVED*****REMOVED***
    {
      path: '/films',
      name: 'Films',
      component: Films,
      meta: {
          requiresAuth: true
  ***REMOVED*****REMOVED*****REMOVED***
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
