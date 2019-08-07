// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp({
  apiKey: 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o',
  authDomain: 'proj-0-8c535.firebaseapp.com',
  databaseURL: 'https://proj-0-8c535.firebaseio.com',
  projectId: 'proj-0-8c535',
  storageBucket: 'proj-0-8c535.appspot.com',
  messagingSenderId: '723491458215',
  appId: '1:723491458215:web:1d08848d53c81a57',
});

***REMOVED****
***REMOVED*** For displaying the app.
***REMOVED***/
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      firebase,
      render: h => h(App),
    });
  }
});
