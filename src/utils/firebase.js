// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKXZoOj6R3rs1m3tVCseqsp8gEM5RXDBE",
  authDomain: "netflixgpt-f42f0.firebaseapp.com",
  projectId: "netflixgpt-f42f0",
  storageBucket: "netflixgpt-f42f0.firebasestorage.app",
  messagingSenderId: "517890195368",
  appId: "1:517890195368:web:1617c7b793fe7a51e3a79d",
  measurementId: "G-YRM7SD1XC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();