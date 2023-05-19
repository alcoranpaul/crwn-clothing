/*
 * File: signUpForm.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 11:12:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 18th May 2023 7:02:45 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Sign in form for Email and password
 */

import { useState } from 'react'; // import the useState hook from the React library
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component';
import { signInWithGooglePopup, signInEmailAndPassword } from '../../utils/firebase/firebase.utils';
import './signInForm.styles.scss'


// set up an object with default values for the form fields
const defaultFormFields = {
  email: '',
  password: '',
};


// Changes the form fields to the values entered by the user
const SignInForm = () => {
  // use the useState hook to create state variables for the form fields
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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
    await signInWithGooglePopup(); // signInWithGooglePopup is a Firebase method that allows users to sign in with their Google account using a popup window.

  }

  /** Handles the form submit event
   *  
   * @param {*} event 
   * @returns if success: creates a new user account with the email and password from firebase
   */
  async function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submit behaviour

    try {
      await signInEmailAndPassword(email, password) // signInEmailAndPassword is a Firebase method that allows users to sign in with their email and password.
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
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >Google sign in</Button>
        </div>

      </form>
    </div>
  );
}

export default SignInForm; // export the SignUpForm component as the default export
