// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';
import Vuelidate from 'vuelidate';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp(process.env.FIREBASE_PARAMETERS);

/**
 * For displaying the app.
 */
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
