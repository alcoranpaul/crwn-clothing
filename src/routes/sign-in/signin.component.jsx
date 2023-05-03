import { 
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import {useEffect} from 'react'
import {getRedirectResult} from 'firebase/auth'


function SignIn(){

    // useEffect is a React Hook that allows you to perform side effects (such as fetching data) when a component renders.
    useEffect(() => {
        async function fetchData() {
            // getRedirectResult is a Firebase method that retrieves the result of a sign-in with a third-party provider such as Google.
            const response = await getRedirectResult(auth);
            if (response) {
                // createUserDocumentFromAuth is a function that creates a new user document in the Firestore database based on the user object returned by Firebase.
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        // The second argument of useEffect specifies when the effect should be re-run. An empty array [] means it should only run once when the component first renders.
        fetchData();
    }, []);
      

    async function logGoogleUser(){
        // signInWithGooglePopup is a Firebase method that allows users to sign in with their Google account using a popup window.
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>
        </div>
    );
}

export default SignIn;
