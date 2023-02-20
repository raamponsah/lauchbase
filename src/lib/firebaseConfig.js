// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8br0Tnl-0D2q2mWcTKO2mfjkzbY1ZOdM",
  authDomain: "stormblaze-f1b8c.firebaseapp.com",
  projectId: "stormblaze-f1b8c",
  storageBucket: "stormblaze-f1b8c.appspot.com",
  messagingSenderId: "546152910690",
  appId: "1:546152910690:web:a6df48aba568a803a5e63b",
  measurementId: "G-LFT4S1N8E2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp