// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbA62mbS3op5J1PLyyI8M67JzSVLDMzK4",
    authDomain: "genius-car-services-8ff7a.firebaseapp.com",
    projectId: "genius-car-services-8ff7a",
    storageBucket: "genius-car-services-8ff7a.appspot.com",
    messagingSenderId: "49512053591",
    appId: "1:49512053591:web:e3a56cfc7f33c112de9c12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;