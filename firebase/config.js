// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApy-kw84nKkmqXEXW8q-IB8a6VElxMqXk",
  authDomain: "next-app-3ea16.firebaseapp.com",
  projectId: "next-app-3ea16",
  storageBucket: "next-app-3ea16.appspot.com",
  messagingSenderId: "261253749567",
  appId: "1:261253749567:web:f59ca27e9f1b72c019918a",
  measurementId: "G-Q5YDWGEV69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);