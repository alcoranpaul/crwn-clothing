/*
 * File: signin.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 9:01:37 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 8th May 2023 4:33:57 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the sign in form and the sign in page
 */

import SignUpForm from "../../components/signUp/signUpForm.component"; // Importing SignUpForm component
import SignInForm from "../../components/signIn/signInForm.component";
import "./authentication.styles.scss";

/** Authentication component
 * 
 * @returns {JSX.Element} Authentication component
 */
function SignIn() {
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default SignIn;
