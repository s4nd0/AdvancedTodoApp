import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASGD01d2u0OlGGTK8XMlJUbDKnWu9HzJs",
  authDomain: "easytaskman.firebaseapp.com",
  projectId: "easytaskman",
  storageBucket: "easytaskman.appspot.com",
  messagingSenderId: "79583718356",
  appId: "1:79583718356:web:6ac77c67fe20edc3044441",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
