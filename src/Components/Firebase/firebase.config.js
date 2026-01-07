// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6goHes1PQwASC2SF3VTnjH4J2gN64AtI",
  authDomain: "gamehub-36c7b.firebaseapp.com",
  projectId: "gamehub-36c7b",
  storageBucket: "gamehub-36c7b.firebasestorage.app",
  messagingSenderId: "208943612934",
  appId: "1:208943612934:web:966c4f6624cd2a3b2f2f87",
  measurementId: "G-Z5TLKJBE7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);