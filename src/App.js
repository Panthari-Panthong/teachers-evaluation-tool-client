import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';

import BatchesListContainer from './components/BatchesListContainer'
import BatchDetailsContainer from './components/BatchDetailsContainer.js'
import StudentDetailsContainer from './components/StudentDetailsContainer'
import LoginFormContainer from './components/LoginFormContainer'
import SignoutContainer from './components/SignoutContainer'
import SignupFormContainer from './components/Signup/SignupFormContainer'
import EvalutionFrom from './components/EvalutionFrom'

class App extends Component {
  render() {
    return (
      <div className="w3-light-grey">
        <div className="w3-bar w3-blue-grey">
          <h3 className="w3-bar-item">Student Evaluations</h3>
          {this.props.auth ? <Link to="/signout" className="w3-bar-item w3-button w3-right">Sign out</Link> : null}
          {!this.props.auth && !this.props.signup ? <Link to="/signup" className="w3-bar-item w3-button w3-right">Sign up</Link> : null}
          {this.props.auth ? <Link to="/batches" className="w3-bar-item w3-button w3-right">Home</Link> : null}
        </div>

        <header className="App-header">
          <Route path="/" exact component={LoginFormContainer} />
          <Route path="/signout" component={SignoutContainer} />
          <Route path="/signup" component={SignupFormContainer} />
          <Route path="/batches" exact component={BatchesListContainer} />
          <Route path="/batch/:id/students" exact component={BatchDetailsContainer} />
          <Route path="/batch/:id/students/:id" exact component={StudentDetailsContainer} />
          <Route path="/batch/:id/students/:id/evaluation/:id" exact component={EvalutionFrom} />
        </header>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    auth: state.auth,
    signup: state.signup
  }
}

export default connect(mapStateToProps)(App);;
