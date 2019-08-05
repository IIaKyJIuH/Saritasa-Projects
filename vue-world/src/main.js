// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store.js'
import { firebaseApp } from './firebase'
import firebase from 'firebase'

Vue.config.productionTip = false

let app

/**
 * For displaying the app.
 */
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      firebaseApp,
      render: h => h(App)
    })
  }

})
