import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupForm from './SignupForm'
import { signup } from '../../actions/teacher'

class SignupFormContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  onSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: ''
    })
    this.props.history.push('/')

  }




  render() {
    return (
      <SignupForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        values={this.state}
      />
    )
  }



}


export default connect(null, { signup })(SignupFormContainer)