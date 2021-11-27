import { getFirestore } from "firebase/firestore"
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDZlC15QRI_ocvT0f0ESFb3FJM4-XK5ns4",
    authDomain: "monkochat-83b1c.firebaseapp.com",
    projectId: "monkochat-83b1c",
    storageBucket: "monkochat-83b1c.appspot.com",
    messagingSenderId: "936193013991",
    appId: "1:936193013991:web:33325c76a56f3fa37a8a42",
    measurementId: "G-9ZMB0YY5J6"
})

const db = getFirestore(firebaseApp);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export {db,auth,provider}