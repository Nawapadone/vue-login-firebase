import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'

Vue.config.productionTip = false


 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyDDnVqBUHMZHJ4mzJQsXAnQFymQwgKzyrA",
  authDomain: "dizcardmerchant.firebaseapp.com",
  databaseURL: "https://dizcardmerchant.firebaseio.com",
  projectId: "dizcardmerchant",
  storageBucket: "dizcardmerchant.appspot.com",
  messagingSenderId: "1091778163176"
};
firebase.initializeApp(config);

var uiConfig = {
  signInSuccessUrl: 'https://www.youtube.com',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID 
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

new Vue({
  render: h => h(App)
}).$mount('#app')
