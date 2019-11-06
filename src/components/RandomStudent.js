import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class RandomStudent extends Component {
  pickStudent = (studentArray) => {
    return studentArray[Math.floor(Math.random() * studentArray.length)]
  }

  randomOne = (redAmout, yellowAmout, greenAmout) => {
    // console.log("RED", this.pickStudent(redAmout))
    const pickStudent = Math.floor(Math.random() * 100)
    // console.log("Hi there", pickStudent)
    if (pickStudent <= 50 && redAmout.length > 0) {
      // console.log("RED", this.pickStudent(redAmout).evaluation.studentId)
      return this.profileStudent(this.pickStudent(redAmout).evaluation.studentId)
    } else if (pickStudent <= 88 && yellowAmout.length > 0) {
      // console.log("YELLOW", this.pickStudent(yellowAmout).evaluation.studentId)
      return this.profileStudent(this.pickStudent(yellowAmout).evaluation.studentId)
    } else if (pickStudent > 88 && greenAmout.length > 0) {
      // console.log("GREEN", this.pickStudent(greenAmout).evaluation.studentId)
      return this.profileStudent(this.pickStudent(greenAmout).evaluation.studentId)
    }
  }

  profileStudent = (id) => {
    this.props.history.push(`/students/${id}`)
  }

  render() {
    // console.log(this.props)
    const { redAmout, yellowAmout, greenAmout } = this.props
    return (
      <div>
        <button onClick={() => this.randomOne(redAmout, yellowAmout, greenAmout)}>ASK A QUESTION</button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

export default withRouter(connect(
  mapStateToProps,
)(RandomStudent));