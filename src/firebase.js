import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAAxBM2FoUyrHcpCND2zNJ4ME3lNuC02Gg",
  authDomain: "messenger-clone-c9d22.firebaseapp.com",
  databaseURL: "https://messenger-clone-c9d22.firebaseio.com",
  projectId: "messenger-clone-c9d22",
  storageBucket: "messenger-clone-c9d22.appspot.com",
  messagingSenderId: "1000945835292",
  appId: "1:1000945835292:web:b16a737717bb91e5016ed9",
});

const db = firebaseApp.firestore();

export default db;
