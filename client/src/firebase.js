// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-91bcc.firebaseapp.com",
  projectId: "mern-estate-91bcc",
  storageBucket: "mern-estate-91bcc.appspot.com",
  messagingSenderId: "488625605388",
  appId: "1:488625605388:web:6388e2050d7ca2f5c25729",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
