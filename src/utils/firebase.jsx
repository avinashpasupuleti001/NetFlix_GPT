// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApxCOzEZHCwC0XBvJBIYbuQV-wkMzDiOk",
  authDomain: "netflixgpt-c7afe.firebaseapp.com",
  projectId: "netflixgpt-c7afe",
  storageBucket: "netflixgpt-c7afe.firebasestorage.app",
  messagingSenderId: "177720655259",
  appId: "1:177720655259:web:428b4322cffa4de5a5353e",
  measurementId: "G-ELK662FVJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);