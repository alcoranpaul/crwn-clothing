import { initializeApp } from 'firebase/app' //Creates an app instance based on config
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
    getFirestore,
    doc,        //retrieve documents in fire store
    getDoc,     //Get data in documents
    setDoc      //Set data in documents
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnt-TMMWjyXhPgTQI-Wp3hK93__GcrDN8",
    authDomain: "crwn-db-c4507.firebaseapp.com",
    projectId: "crwn-db-c4507",
    storageBucket: "crwn-db-c4507.appspot.com",
    messagingSenderId: "930703525044",
    appId: "1:930703525044:web:3fd7d09f9005db367983e1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); //Connected with google auth
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(); //Same authentication with different providers
export const signInWithGooglePopup = () => signInWithPopup(auth, provider) //Connected with custom authentication
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); //Go to collection 'users'
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) { //Create new user
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userDocRef
}