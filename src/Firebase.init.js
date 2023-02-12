// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvuWzWMg7vOiFphiFwVdkzHC3h7lIYnkA",
  authDomain: "project-a9d4e.firebaseapp.com",
  projectId: "project-a9d4e",
  storageBucket: "project-a9d4e.appspot.com",
  messagingSenderId: "77643133362",
  appId: "1:77643133362:web:477cd0bbbd61a40d97b4ab",
  measurementId: "G-984SGQGHY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
