// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
var config = {
  apiKey: "AIzaSyCDsqfKhnrNsoWbTKshccD8EeOrANFqXBc",
  authDomain: "vue-login-7d9b2.firebaseapp.com",
  databaseURL: "https://vue-login-7d9b2.firebaseio.com",
  projectId: "vue-login-7d9b2",
  storageBucket: "vue-login-7d9b2.appspot.com",
  messagingSenderId: "531090609527"
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
