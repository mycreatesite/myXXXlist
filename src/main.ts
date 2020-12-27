import "babel-polyfill";
import Vue from "vue";
import "@babel/polyfill";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify";
import firebase from "firebase/app";
import "firebase/analytics";
import './registerServiceWorker'

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBKkTyxYdiRIezr4Vy_Z0e5tm9tsU4To1Y",
  authDomain: "my-xxx-list-pj.firebaseapp.com",
  databaseURL: "https://my-xxx-list-pj.firebaseio.com",
  projectId: "my-xxx-list-pj",
  storageBucket: "my-xxx-list-pj.appspot.com",
  messagingSenderId: "533304353052",
  appId: "1:533304353052:web:64b3fe40b8609aed0b9ad9",
  measurementId: "G-WC73XFKDN6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
