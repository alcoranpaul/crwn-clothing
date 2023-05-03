import { useState } from "react"; // import the useState hook from the React library

// set up an object with default values for the form fields
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

// define the SignUpForm component
function SignUpForm() {
  // use the useState hook to create state variables for the form fields
  const [formFields, setFormFields] = useState(defaultFormFields);

  // destructure the form fields from the state object
  const { displayName, email, password, confirmPassword } = formFields;

  // define a function that handles changes to the form fields
  function handleChange(event) {
    // destructure the name and value of the changed field from the event object
    const { name, value } = event.target;

    // Use the spread operator to copy the existing form fields and update the value of the field with the given name
    setFormFields({ ...formFields, [name]: value }); 
  }


  // return the form JSX
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}> {/* add an onSubmit handler that calls a function to handle form submission */}
        <label>Display Name</label>
        <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>

        <label>Email</label>
        <input type='email' required onChange={handleChange} name='email' value={email}/>

        <label>Password</label>
        <input type='password' required onChange={handleChange} name='password' value={password}/>

        <label>Confirm Password</label>
        <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm; // export the SignUpForm component as the default export
