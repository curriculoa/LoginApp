// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKaHQc56Z-hbM1ZMr-begSFQMpF_24aGA",
  authDomain: "loginapp-21127.firebaseapp.com",
  projectId: "loginapp-21127",
  storageBucket: "loginapp-21127.appspot.com",
  messagingSenderId: "1046379747569",
  appId: "1:1046379747569:web:b0e040ac9ed2816b487150",
  measurementId: "G-WBX40QR161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);