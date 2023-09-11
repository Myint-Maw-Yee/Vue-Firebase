import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCRXcBd9zR37XJJYQEydL3vORxbhvD-HEc",
  authDomain: "vue-blog-system-7028e.firebaseapp.com",
  projectId: "vue-blog-system-7028e",
  storageBucket: "vue-blog-system-7028e.appspot.com",
  messagingSenderId: "39298435102",
  appId: "1:39298435102:web:321aac671f58b2b52f460f",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp };
