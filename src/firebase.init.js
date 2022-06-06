// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_4n3Lb6uniqq5xAGJaM9M3emw-Oi68Nk",
  authDomain: "red-onion-a5d19.firebaseapp.com",
  projectId: "red-onion-a5d19",
  storageBucket: "red-onion-a5d19.appspot.com",
  messagingSenderId: "360296322209",
  appId: "1:360296322209:web:4b3b3770ebe7fa037b0ce0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
