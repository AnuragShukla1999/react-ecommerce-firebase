
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAtWIklzn_d6VdwXRJiHBK2uV6VsfaoWZU",
  authDomain: "react-ecommerce-e552e.firebaseapp.com",
  projectId: "react-ecommerce-e552e",
  storageBucket: "react-ecommerce-e552e.appspot.com",
  messagingSenderId: "722614961602",
  appId: "1:722614961602:web:5bde194b9475b1f47b425b",
  measurementId: "G-FRRTYH3GYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);



const auth = getAuth(app);

export { fireDB, auth }