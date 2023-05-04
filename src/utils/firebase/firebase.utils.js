/*
 * File: firebase.utils.js
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 9:52:19 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 4th May 2023 12:24:33 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * Description: Firebase utility functions
 */

//Imports
import { initializeApp } from 'firebase/app' // Creates an app instance based on config
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import {
    getFirestore,
    doc,        // Retrieve documents in Firestore
    getDoc,     // Get data in documents
    setDoc      // Set data in documents
} from 'firebase/firestore'

//************************************* Firebase configuration *************************************************//
//**************************************************************************************************************//
// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDnt-TMMWjyXhPgTQI-Wp3hK93__GcrDN8",
    authDomain: "crwn-db-c4507.firebaseapp.com",
    projectId: "crwn-db-c4507",
    storageBucket: "crwn-db-c4507.appspot.com",
    messagingSenderId: "930703525044",
    appId: "1:930703525044:web:3fd7d09f9005db367983e1"
};

// Initialize Firebase app instance
const firebaseApp = initializeApp(firebaseConfig);

//************************************* Google Authentication *************************************************//
//**************************************************************************************************************//
// Get the Google authentication provider object
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account" // Always trigger Google pop-up whenever we use GoogleAuthProvider for authentication and sign in
});

// Get the authentication object
export const auth = getAuth(); // Same authentication with different providers

// Define functions to sign in with Google
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider) // Connected with custom authentication
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider) // Connected with custom authentication

//************************************* Firebase database functions ********************************************//
//**************************************************************************************************************//
// Get the Firestore object
export const db = getFirestore();

/** Function to create a user document from the user authentication object
 * @param {*} userAuth - User authentication object
 * @param {*} additionalInformation  - Additional information to be added to the user document
 * @returns - User document reference
 */
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid); // Go to collection 'users' and document with userAuth.uid
    const userSnapshot = await getDoc(userDocRef); // Get the user document

    if (!userSnapshot.exists()) { // Create new user if user does not exist
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // Create user document
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation // Spread additional information
            });
        } catch (err) {
            console.log('Error creating user', err.message)
        }
    }

    return userDocRef; // Return the user document reference
}

/** Function to create a user with email and password
 * 
 * @param {*} email - User email
 * @param {*} password - User password
 * @returns 
 */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    // Create user with email and password
    return await createUserWithEmailAndPassword(auth, email, password);
}