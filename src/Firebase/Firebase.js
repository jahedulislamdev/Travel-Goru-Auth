// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAMgHcxB-R63LADXIygQJtVGRFFjT_c7fQ",
   authDomain: "travel-goru-auth.firebaseapp.com",
   projectId: "travel-goru-auth",
   storageBucket: "travel-goru-auth.firebasestorage.app",
   messagingSenderId: "1001692847133",
   appId: "1:1001692847133:web:02c2dc6c1a917fe5e67af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;