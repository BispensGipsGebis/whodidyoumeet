// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

let app;
var config = {
  apiKey: "AIzaSyC-DkQ4JGe_lmujhGhrcU5zAklgBOQL4tM",
    authDomain: "whodidyoumeet-e37fb.firebaseapp.com",
    databaseURL: "https://whodidyoumeet-e37fb.firebaseio.com",
    projectId: "whodidyoumeet-e37fb",
    storageBucket: "whodidyoumeet-e37fb.appspot.com",
    messagingSenderId: "75685996164"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});
