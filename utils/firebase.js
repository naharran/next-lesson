// utils/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: 'AIzaSyApy-kw84nKkmqXEXW8q-IB8a6VElxMqXk',
    authDomain: 'next-app-3ea16.firebaseapp.com',
    projectId: 'next-app-3ea16',
    storageBucket: 'next-app-3ea16.appspot.com',
    messagingSenderId: '261253749567',
    appId: '1:261253749567:web:f59ca27e9f1b72c019918a',
    measurementId: 'G-Q5YDWGEV69'
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
