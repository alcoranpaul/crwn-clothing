/*
 * File: signUpForm.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 11:12:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 3rd May 2023 11:51:33 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the sign up form for the sign up page
 */

import { useState } from 'react'; // import the useState hook from the React library
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

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

  // define a function that handles changes to the form fields
  function handleChange(event) {
    event.preventDefault();
    // destructure the name and value of the changed field from the event object
    const { name, value } = event.target;

    // Use the spread operator to copy the existing form fields and update the value of the field with the given name
    setFormFields({ ...formFields, [name]: value });
  }

  // handles form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the default form submit behaviour

    // confirm password === confirmPassword
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // create a new user account with the email and password from firebase
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
    } catch (err) {
      console.log('Error creating user with email and password', err);
    }
  };

  // return the form JSX
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <label>Email</label>
        <input
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <label>Password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm; // export the SignUpForm component as the default export
