import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signUp/signUpForm.component";

function SignIn(){


    async function logGoogleUser(){
        // signInWithGooglePopup is a Firebase method that allows users to sign in with their Google account using a popup window.
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;
