// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ZGklggiHNbSuzrWIbsT56WCm1_rvCew",
  authDomain: "cmfages-portfolio.firebaseapp.com",
  projectId: "cmfages-portfolio",
  storageBucket: "cmfages-portfolio.appspot.com",
  messagingSenderId: "547449445321",
  appId: "1:547449445321:web:15324894fac4100c4ce618",
  measurementId: "G-F3XZCJZLQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);