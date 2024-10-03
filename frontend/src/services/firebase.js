import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCJTRIA87LhY2dZ9nbNTOGMSZDad-wo0DQ",
//   authDomain: "job-listing-portal-5055a.firebaseapp.com",
//   projectId: "job-listing-portal-5055a",
//   storageBucket: "job-listing-portal-5055a.appspot.com",
//   messagingSenderId: "297486587729",
//   appId: "1:297486587729:web:4d71c02c89b968942ea570",
//   measurementId: "G-PC1WVWRLVH"
// };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
