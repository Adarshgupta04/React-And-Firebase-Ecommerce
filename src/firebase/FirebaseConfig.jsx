import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFWM-gsVQF41d8N-GAz-rxirQ1XNJ_PvE",
    authDomain: "myfirstapp-e6eba.firebaseapp.com",
    projectId: "myfirstapp-e6eba",
    storageBucket: "myfirstapp-e6eba.appspot.com",
    messagingSenderId: "540957912385",
    appId: "1:540957912385:web:66e76d929ba942dcd505c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };