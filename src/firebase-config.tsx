// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore";
import {getFunctions, connectFunctionsEmulator} from "firebase/functions";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiSBXXnzYTYrMkNkLJu_P_eF-pcJKIby8",
  authDomain: "room8-helper.firebaseapp.com",
  databaseURL: "https://room8-helper-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "room8-helper",
  storageBucket: "room8-helper.appspot.com",
  messagingSenderId: "631616503575",
  appId: "1:631616503575:web:646a7d9b3c66667fcc4152",
  measurementId: "G-RVSSHJ63KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const functions = getFunctions(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

if(window.location.hostname === "localhost"){
    connectFunctionsEmulator(functions, "localhost", 5002);};
