// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuqugICYXKXAU2ap0GEzXItOSBZ2Jdx7Q",
  authDomain: "netflix-9a511.firebaseapp.com",
  projectId: "netflix-9a511",
  storageBucket: "netflix-9a511.appspot.com",
  messagingSenderId: "375486356576",
  appId: "1:375486356576:web:306315945a342131e1f705",
  measurementId: "G-Z2K4Q65QDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()