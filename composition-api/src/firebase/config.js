import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCRXcBd9zR37XJJYQEydL3vORxbhvD-HEc",
  authDomain: "vue-blog-system-7028e.firebaseapp.com",
  projectId: "vue-blog-system-7028e",
  storageBucket: "vue-blog-system-7028e.appspot.com",
  messagingSenderId: "39298435102",
  appId: "1:39298435102:web:da6cd883568612172f460f",
};
//init firebase
firebase.initializeApp(firebaseConfig);

//database setup
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
