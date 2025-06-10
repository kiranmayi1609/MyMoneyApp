// src/config/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAXEGdIYuhqzo4ddUzroW43OlK668c8YXM',
  authDomain: 'mymoney-1ea10.firebaseapp.com',
  projectId: 'mymoney-1ea10',
  storageBucket: 'mymoney-1ea10.firebasestorage.app',
  messagingSenderId: '762719476637',
  appId: '1:762719476637:android:f1b46256fe6f4db1e82d74',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
