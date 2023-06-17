// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyHf3lJ0qBwVDkFhjPJAFeUsLdb4tapqU",
  authDomain: "anatomical-structures.firebaseapp.com",
  projectId: "anatomical-structures",
  storageBucket: "anatomical-structures.appspot.com",
  messagingSenderId: "593414405600",
  appId: "1:593414405600:web:781f6eee902ca3b461ff85",
  measurementId: "G-9CS6CSM4WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);