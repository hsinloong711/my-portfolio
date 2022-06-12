// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLRgUq4y6fkp8ho0jbgCJ2MVx7iFqimIM",
  authDomain: "my-portfolio-42126.firebaseapp.com",
  projectId: "my-portfolio-42126",
  storageBucket: "my-portfolio-42126.appspot.com",
  messagingSenderId: "502881222580",
  appId: "1:502881222580:web:cb6c113cad85ca1e293ce1",
  measurementId: "G-5VHXGSKDBJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
