import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASdGsWaJKnKeDquNBb6JTa0CLHDwpKUCk",
  authDomain: "wine-meeting.firebaseapp.com",
  projectId: "wine-meeting",
  storageBucket: "wine-meeting.appspot.com",
  messagingSenderId: "51207730272",
  appId: "1:51207730272:web:1e2dcbcd1bb0612674bf05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)