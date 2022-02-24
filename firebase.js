import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA0EJ-zQN-KqZSkEfm4epNwDIzJHPNOll0",
  authDomain: "clone-7ef50.firebaseapp.com",
  projectId: "clone-7ef50",
  storageBucket: "clone-7ef50.appspot.com",
  messagingSenderId: "212099202025",
  appId: "1:212099202025:web:b52c482f2306340c56e978"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };