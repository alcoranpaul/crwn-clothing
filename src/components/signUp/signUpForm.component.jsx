/*
 * File: signUpForm.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 11:12:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 10:42:34 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the sign up form
 */

import { useState } from 'react'; // import the useState hook from the React library
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/Button.component';
import { SignUpContainer } from './signUpForm.styles.jsx';

// set up an object with default values for the form fields
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};


// Changes the form fields to the values entered by the user
function SignUpForm() {
  // use the useState hook to create state variables for the form fields
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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

  /** Handles the form submit event
   *  
   * @param {*} event 
   * @returns if success: creates a new user account with the email and password from firebase
   */
  async function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submit behaviour

    // confirm password === confirmPassword
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // create a new user account with the email and password from firebase
      const { user } = await createAuthUserWithEmailAndPassword(email, password,);

      await createUserDocumentFromAuth(user, { displayName }); // create a new user document in firestore with the user object from firebase auth
      resetFormFields(); // reset the form fields
    }
    catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      }
      else {
        console.log('Error creating user with email and password', err);
      }
    }
  };

  // return the form JSX
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUpForm; // export the SignUpForm component as the default export
