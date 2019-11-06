import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';

import BatchesListContainer from './components/BatchesListContainer'
import BatchDetailsContainer from './components/BatchDetailsContainer.js'
import StudentDetailsContainer from './components/StudentDetailsContainer'
import LoginFormContainer from './components/LoginFormContainer'
import SignoutContainer from './components/SignoutContainer'
import SignupFormContainer from './components/Signup/SignupFormContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topnav">
          {this.props.auth ? <Link to="/signout">Sign out</Link> : null}
          {!this.props.auth ? <Link to="/signup">Sign up</Link> : null}
        </div>

        <header className="App-header">
          <Route path="/" exact component={LoginFormContainer} />
          <Route path="/batches" exact component={BatchesListContainer} />
          <Route path="/batches/:id" exact component={BatchDetailsContainer} />
          <Route path="/students/:id" exact component={StudentDetailsContainer} />
          <Route path="/signout" component={SignoutContainer} />
          <Route path="/signup" component={SignupFormContainer} />
        </header>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);;
