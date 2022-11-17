// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyOOFP7YoS5phcqdCopkjElWLgqMxZanw",
  authDomain: "ema-john-simple-607c2.firebaseapp.com",
  projectId: "ema-john-simple-607c2",
  storageBucket: "ema-john-simple-607c2.appspot.com",
  messagingSenderId: "111306297067",
  appId: "1:111306297067:web:1a4a81954f85d5939ff8ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;