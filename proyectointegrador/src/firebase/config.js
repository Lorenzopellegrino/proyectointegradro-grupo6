import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDtxw4T-Lt0vVqpr323u96TfcC3f3m6SLs",
    authDomain: "finalprogra3.firebaseapp.com",
    projectId: "finalprogra3",
    storageBucket: "finalprogra3.firebasestorage.app",
    messagingSenderId: "773034931250",
    appId: "1:773034931250:web:5a15d03a21d4b2a9a9b82b"
};

app.initializeApp(firebaseConfig)
export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();