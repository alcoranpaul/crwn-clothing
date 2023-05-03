import { initializeApp } from 'firebase/app' // Creates an app instance based on config
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc,        // Retrieve documents in Firestore
    getDoc,     // Get data in documents
    setDoc      // Set data in documents
} from 'firebase/firestore'

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

// Initialize Google authentication provider
const googleProvider = new GoogleAuthProvider(); // Connected with Google Auth
googleProvider.setCustomParameters({
    prompt: "select_account"
});

// Get the authentication object
export const auth = getAuth(); // Same authentication with different providers

// Define functions to sign in with Google
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider) // Connected with custom authentication
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider) // Connected with custom authentication

// Get the Firestore object
export const db = getFirestore();

// Function to create a user document from authentication information
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); // Go to collection 'users'
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) { // Create new user if user does not exist
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userDocRef; // Return the user document reference
}
