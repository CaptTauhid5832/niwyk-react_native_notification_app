// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBPwM1Frb49YmxJNyiPkBymAJ1dtTWjj2A",
  authDomain: "postify-app-ddf5a.firebaseapp.com",
  projectId: "postify-app-ddf5a",
  storageBucket: "postify-app-ddf5a.firebasestorage.app",
  messagingSenderId: "342463570365",
  appId: "1:342463570365:web:fe1c49a183266d64a4f2d4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);