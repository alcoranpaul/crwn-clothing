/*
 * File: signUpForm.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 11:12:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 8th May 2023 4:59:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Sign in form for Email and password
 */

import { useState, useContext } from 'react'; // import the useState hook from the React library
import { signInWithGooglePopup, createUserDocumentFromAuth, signInEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/Button.component';
import { UserContext } from '../../contexts/user.contexts';
import './signInForm.styles.scss'


// set up an object with default values for the form fields
const defaultFormFields = {
  email: '',
  password: '',
};


// Changes the form fields to the values entered by the user
function SignInForm() {
  // use the useState hook to create state variables for the form fields
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  /** Resets the form fields to their default values
   */
  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  /** Handles changes to the form fields
   * 
   * @param {*} event
   */
  function handleChange(event) {
    event.preventDefault();
    // destructure the name and value of the changed field from the event object
    const { name, value } = event.target;

    // Use the spread operator to copy the existing form fields and update the value of the field with the given name
    setFormFields({ ...formFields, [name]: value });
  }

  /**Function that signs in a user with their Google account.
 */
  async function signInWithGoogle() {
    const { user } = await signInWithGooglePopup(); // signInWithGooglePopup is a Firebase method that allows users to sign in with their Google account using a popup window.
    await createUserDocumentFromAuth(user) // createUserDocumentFromAuth is a function that creates a user document in the database if it doesn't already exist.
  }

  /** Handles the form submit event
   *  
   * @param {*} event 
   * @returns if success: creates a new user account with the email and password from firebase
   */
  async function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submit behaviour

    try {
      const { user } = await signInEmailAndPassword(email, password) // signInEmailAndPassword is a Firebase method that allows users to sign in with their email and password.
      setCurrentUser(user); // set the current user in the user context
      resetFormFields(); // reset the form fields
    }
    catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Wrong password. Please try again.')
          break;
        case 'auth/user-not-found':
          alert('User not found. Please try again.')
          break;
        default:
          alert('Error signing in with email and password')
          console.log(err)
      }
    }
  };

  // return the form JSX
  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type='email,'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label="Password"
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google sign in</Button>
        </div>

      </form>
    </div>
  );
}

export default SignInForm; // export the SignUpForm component as the default export
