// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJGK3NFBKAQQYVpfh5_ZrzJ3mmRsq9K2k",
  authDomain: "todo-ad13d.firebaseapp.com",
  projectId: "todo-ad13d",
  storageBucket: "todo-ad13d.appspot.com",
  messagingSenderId: "831639244381",
  appId: "1:831639244381:web:fc95f3a9696f0d4358c7b4",
  measurementId: "G-LBQQ0XN41C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFireStore(firebaseConfig);
export const FIREBASE_AUTH = getAuth(firebaseConfig);