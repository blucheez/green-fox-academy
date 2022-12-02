import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBm4zq5WlzgjZc9-3zjBkqy5MizDhnJzbM',
    authDomain: 'reddit-clone-52284.firebaseapp.com',
    projectId: 'reddit-clone-52284',
    storageBucket: 'reddit-clone-52284.appspot.com',
    messagingSenderId: '351311023723',
    appId: '1:351311023723:web:cd5cecf27d190b0300eb2e',
  }
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)