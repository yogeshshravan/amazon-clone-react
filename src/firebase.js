import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-MdvgqXtJfT-lM60jQHJoNyjNI30rXPw",
  authDomain: "challenge-91573.firebaseapp.com",
  databaseURL: "https://challenge-91573.firebaseio.com",
  projectId: "challenge-91573",
  storageBucket: "challenge-91573.appspot.com",
  messagingSenderId: "215780931346",
  appId: "1:215780931346:web:cb70ad5475d73752c465cb",
  measurementId: "G-QZE484GK8M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
