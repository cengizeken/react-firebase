
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import {getFireStore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsNogKpTksWPruAOj0IJnlebZlA6IDXQM",
  authDomain: "postywebapp.firebaseapp.com",
  projectId: "postywebapp",
  storageBucket: "postywebapp.appspot.com",
  messagingSenderId: "480529553459",
  appId: "1:480529553459:web:f0a5ef06d726d5a6ac2b46"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const  db = getFirestore(app);