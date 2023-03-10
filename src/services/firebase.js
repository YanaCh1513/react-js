//import firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFDSsXWzTJDzFChF4SY6tc8QrehST0xEQ",
    authDomain: "gb-exapmle.firebaseapp.com",
    databaseURL: "https://gb-exapmle-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-exapmle",
    storageBucket: "gb-exapmle.appspot.com",
    messagingSenderId: "463222621218",
    appId: "1:463222621218:web:c413b514fbb349de3cb67b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(auth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(auth, email, password)

export const logOut = async () => await signOut(auth)

export const db = getDatabase(app)

export const getMessages = (chatId) => {

}

// export const addMessage = (userId, chatId, id, text) => {
//     db.ref("messages")
//         .child(chatId)
//         .child(message.id)
//         .set(message)

//     set(ref(db, `messages/chats/${chatId}`), {
//         id: id,
//         userId: userId,
//         text: text
//     });
// }

// обернуть логику работы с базой здесь
// export const dbMessages = db.ref('messages')

// export const getDbMessages = (state) => {
//     const messages
// }

// export const onStateChanged = async () => await onAuthStateChanged(auth)

// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredensials) => {
//         // signed in
//         console.log(userCredensials)
//         const user = userCredensials.user
//     })
//     .catch((error) => {
//         console.log(error)
//         const errorCode = error.code
//         const errorMessage = error.message
//     })
