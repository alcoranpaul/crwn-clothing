/*
 * File: signin.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 9:01:37 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 10:43:32 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the sign in form and the sign in page
 */

import SignUpForm from "../../components/signUp/signUpForm.component"; // Importing SignUpForm component
import SignInForm from "../../components/signIn/signInForm.component";
import { AuthenticationContainer } from "./authentication.styles.jsx";

/** Authentication component
 * 
 * @returns {JSX.Element} Authentication component
 */
function SignIn() {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
}

export default SignIn;
