// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbY5GZDhZA9MGxCJ_qnav0fUugdQKB2Ng",
  authDomain: "artifactlog.firebaseapp.com",
  projectId: "artifactlog",
  storageBucket: "artifactlog.firebasestorage.app",
  messagingSenderId: "699716440932",
  appId: "1:699716440932:web:e9a6385c2a3f5e722c2071"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)