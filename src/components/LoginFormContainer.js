import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/teacher'
import { Redirect } from "react-router-dom";

class LoginFormContainer extends Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: ''
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return this.props.token ? (
      <Redirect to="/batches" />
    ) : (<div>
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    </div>)
  }
}


const mapStateToProps = state => {
  return {
    token: state.auth
  };
};

export default connect(mapStateToProps, { login })(LoginFormContainer)