import React from "react";
import StudentDetails from "./StudentDetail";
import { connect } from "react-redux";
import { loadStudent, deleteStudent } from "../actions/students";
import { createEvaluation, loadEvaluations } from '../actions/evaluations'

class StudentDetailsContainer extends React.Component {
  state = {
    remark: "",
    date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
    color: ""
  }

  componentDidMount() {
    this.props.loadStudent(Number(this.props.match.params.id));
  }


  onDelete = async () => {
    this.props.deleteStudent(this.props.student.id)
    await this.props.history.push(`/batches/${this.props.batch.id}`)
  }

  onChange = (event) => {
    // console.log("EVENT", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  onSubmit = (event) => {
    event.preventDefault()
    if (this.props.student.evaluations.length === 0) {
      if (this.state.color === "green") {
        this.props.createEvaluation({
          ...this.state,
          studentId: this.props.student.id
        })
      } else if (this.state.color === "yellow" || this.state.color === "red") {
        if (this.state.remark !== "") {
          this.props.createEvaluation({
            ...this.state,
            studentId: this.props.student.id
          })
        } else {
          return null
        }
      } else {
        return null
      }
    } else if (this.props.student.evaluations.map(evaluation => evaluation.date === this.state.date)) {
      return null
    }
    this.setState({
      remark: ''
    })

    this.props.history.push(`/batches/${this.props.batch.id}`)

  }



  render() {
    return (
      <div>
        <StudentDetails
          student={this.props.student}
          onDelete={this.onDelete}
          value={this.state}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
    batch: state.batch
  };
}

export default connect(
  mapStateToProps,
  { loadStudent, deleteStudent, createEvaluation, loadEvaluations }
)(StudentDetailsContainer);