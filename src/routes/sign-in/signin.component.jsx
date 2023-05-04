/*
 * File: signin.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 9:01:37 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 4th May 2023 12:07:05 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the sign in page with Google
 */

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"; // Importing Firebase methods from firebase.utils.js
import SignUpForm from "../../components/signUp/signUpForm.component"; // Importing SignUpForm component


/** SignIn component with Google 
 * 
 * @returns SignIn component with Google 
 */
function SignIn() {

    /**
     * Function that signs in a user with their Google account.
     */
    async function logGoogleUser() {
        const { user } = await signInWithGooglePopup(); // signInWithGooglePopup is a Firebase method that allows users to sign in with their Google account using a popup window.
        const userDocRef = await createUserDocumentFromAuth(user) // createUserDocumentFromAuth is a function that creates a user document in the database if it doesn't already exist.
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;
