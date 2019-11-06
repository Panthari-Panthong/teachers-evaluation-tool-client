import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/teacher';
import { Redirect } from 'react-router-dom';

class SignoutContainer extends Component {
  componentDidMount() {
    this.props.logout()
  }

  render() {
    if (!this.props.login) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1>Sign out...</h1>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    login: state.auth
  }
}

export default connect(
  mapStateToProps, { logout }
)(SignoutContainer);