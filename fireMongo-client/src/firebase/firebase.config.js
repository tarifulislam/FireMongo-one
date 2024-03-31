
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYrvbKcpg-1hmd7gc3iAsdOvUbUY4Nirw",
  authDomain: "firemongo-f5d94.firebaseapp.com",
  projectId: "firemongo-f5d94",
  storageBucket: "firemongo-f5d94.appspot.com",
  messagingSenderId: "26877571657",
  appId: "1:26877571657:web:51ad657085663e086f4598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// fire base initialize done -------