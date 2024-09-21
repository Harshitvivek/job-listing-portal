import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCJTRIA87LhY2dZ9nbNTOGMSZDad-wo0DQ",
  authDomain: "job-listing-portal-5055a.firebaseapp.com",
  projectId: "job-listing-portal-5055a",
  storageBucket: "job-listing-portal-5055a.appspot.com",
  messagingSenderId: "297486587729",
  appId: "1:297486587729:web:4d71c02c89b968942ea570",
  measurementId: "G-PC1WVWRLVH"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
