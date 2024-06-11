// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuRnJ2KOgS5KSbeDHHo8XBTp8A8GiPf3s",
  authDomain: "book-task-af680.firebaseapp.com",
  projectId: "book-task-af680",
  storageBucket: "book-task-af680.appspot.com",
  messagingSenderId: "388136786393",
  appId: "1:388136786393:web:c7bd5edd7f6af7bd2061c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;