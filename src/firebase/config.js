import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUJ6sGDFHs-gnHkP5qQwAX-nQnHhDQAvU",
  authDomain: "mi-app-c302f.firebaseapp.com",
  projectId: "mi-app-c302f",
  storageBucket: "mi-app-c302f.firebasestorage.app",
  messagingSenderId: "663747102899",
  appId: "1:663747102899:web:17e54fc3310182c8b808c6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);