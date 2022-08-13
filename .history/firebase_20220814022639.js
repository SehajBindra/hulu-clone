// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4JvvvqJ-IPuCJOpNqazitps9treZ__GE",
  authDomain: "hullu-clone.firebaseapp.com",
  projectId: "hullu-clone",
  storageBucket: "hullu-clone.appspot.com",
  messagingSenderId: "49730551987",
  appId: "1:49730551987:web:6a25cceaae9572b91030c6",
  measurementId: "G-9RPZQCFEY4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
