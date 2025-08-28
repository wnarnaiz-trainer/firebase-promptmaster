// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration will be populated by App Hosting.
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG || '{}');


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
