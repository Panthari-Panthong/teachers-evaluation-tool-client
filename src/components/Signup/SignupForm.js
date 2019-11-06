import React from 'react'

export default function SignupForm(props) {
  // console.log('From Signup form', props)

  return (
    <div className="Sign-up">
      <h1>Sign up</h1>
      <p>Please fill in this form to create an account.</p>
      <form onSubmit={props.onSubmit}>
        <hr />
        <label>
          Email:<br />
          <input className='inputEmail' type="email" name="email" onChange={props.onChange} value={props.values.email} placeholder="Email" />
        </label><br />
        <label>
          Password:<br />
          <input name="password" type="password" onChange={props.onChange} value={props.values.password} placeholder="Password" />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  )
}