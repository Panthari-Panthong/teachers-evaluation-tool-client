import React from 'react'

export default function LoginForm(props) {

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={props.onSubmit}>
        <label>
          Email:<br />
          <input type="email" name="email" onChange={props.onChange} value={props.values.email} placeholder="Email" />
        </label><br />
        <label>
          Password:<br />
          <input name="password" type="password" onChange={props.onChange} value={props.values.password} placeholder="Password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>

  )
}