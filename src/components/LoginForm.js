import React from 'react'

export default function LoginForm(props) {

  return (
    <div className="w3-container w3-display-middle" style={{ width: "60%" }}>
      <h1 className="w3-container w3-blue-grey">Log In</h1>
      <form onSubmit={props.onSubmit} className="w3-container w3-card-4">
        <label>
          Email:<br />
          <input className="w3-input" style={{ width: "90%" }} type="email" name="email" onChange={props.onChange} value={props.values.email} placeholder="Email" />
        </label><br />
        <label>
          Password:<br />
          <input className="w3-input" style={{ width: "90%" }} name="password" type="password" onChange={props.onChange} value={props.values.password} placeholder="Password" />
        </label>
        <input className="w3-button w3-section w3-blue-grey w3-ripple" type="submit" value="Login" />
      </form>
    </div>

  )
}