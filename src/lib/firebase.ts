// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "mock-api-key-for-studio",
  authDomain: "prompt-master-87654.firebaseapp.com",
  projectId: "prompt-master-87654",
  storageBucket: "prompt-master-87654.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:a1b2c3d4e5f6a1b2c3d4e5",
  measurementId: "G-ABCDEFGHIJ",
  databaseURL: "https://prompt-master-87654.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
