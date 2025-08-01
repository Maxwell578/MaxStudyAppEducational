// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAklaaxYr794SpcjIS7WCpn7l3MIzYCcCI",
  authDomain: "maxstudyapp-1aa3f.firebaseapp.com",
  databaseURL: "https://maxstudyapp-1aa3f-default-rtdb.firebaseio.com",
  projectId: "maxstudyapp-1aa3f",
  storageBucket: "maxstudyapp-1aa3f.firebasestorage.app",
  messagingSenderId: "530600906207",
  appId: "1:530600906207:web:72559653be16700319086a",
  measurementId: "G-N6MVSNMF7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);