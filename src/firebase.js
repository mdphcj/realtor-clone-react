// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdccwq2X9Pf0WkKxOHpC8nOVM1fPfFLx8",
  authDomain: "realtor-clone-react-476f5.firebaseapp.com",
  projectId: "realtor-clone-react-476f5",
  storageBucket: "realtor-clone-react-476f5.appspot.com",
  messagingSenderId: "960683439886",
  appId: "1:960683439886:web:16466e5401e4c36f1a895f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();