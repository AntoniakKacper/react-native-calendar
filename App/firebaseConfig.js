import { initializeApp } from "firebase/app";
import  { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0D9OWtu830AsrD597VgQ8FGZyEbhAbWY",
  authDomain: "calendarandroid-f731d.firebaseapp.com",
  projectId: "calendarandroid-f731d",
  storageBucket: "calendarandroid-f731d.appspot.com",
  messagingSenderId: "202075248160",
  appId: "1:202075248160:web:d46426cc32b59f16670e45",
  measurementId: "G-5C17Q9G652"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)