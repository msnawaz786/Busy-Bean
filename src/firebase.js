

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBiti429oKkBNzhh0-_fPW3rdtqDUyU7aw",
  authDomain: "busy-bean-42d66.firebaseapp.com",
  projectId: "busy-bean-42d66",
  storageBucket: "busy-bean-42d66.appspot.com", 
  messagingSenderId: "573446099973",
  appId: "1:573446099973:web:3f97fceaca174326dfb86c",
  measurementId: "G-HRMK145Z9R"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
