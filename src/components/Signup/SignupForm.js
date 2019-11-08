import React from 'react'

export default function SignupForm(props) {
  // console.log('From Signup form', props)

  return (
    <div className="w3-container w3-display-middle" style={{ width: "60%" }}>
      <h1 className="w3-container w3-blue-grey">Sign up</h1>
      <p>Please fill in this form to create an account.</p>
      <form onSubmit={props.onSubmit} className="w3-container w3-card-4">
        <hr />
        <label>
          Email:<br />
          <input className="w3-input" style={{ width: "90%" }} type="email" name="email" onChange={props.onChange} value={props.values.email} placeholder="Email" />
        </label><br />
        <label>
          Password:<br />
          <input className="w3-input" style={{ width: "90%" }} name="password" type="password" onChange={props.onChange} value={props.values.password} placeholder="Password" />
        </label>
        <input className="w3-button w3-section w3-blue-grey w3-ripple" type="submit" value="Sign Up" />
      </form>
    </div>
  )
}