/** @format */

import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD-NfaOI1bNSYpB4-1bpkl69MMuNPlpUX0",
  authDomain: "todoapp-48bab.firebaseapp.com",
  projectId: "todoapp-48bab",
  storageBucket: "todoapp-48bab.appspot.com",
  messagingSenderId: "328707147132",
  appId: "1:328707147132:web:5425bf565a669b698ad0f9",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
