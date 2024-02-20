// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD3DcKqX6TRhcEu2-zHiX0D-qwl_QtvKo",
  authDomain: "realtor-website-c9c2b.firebaseapp.com",
  projectId: "realtor-website-c9c2b",
  storageBucket: "realtor-website-c9c2b.appspot.com",
  messagingSenderId: "1033470334579",
  appId: "1:1033470334579:web:07cdf0f1dc6360066dfc06"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()