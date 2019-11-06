import React from "react";
import { connect } from "react-redux";
import { createStudent } from "../actions/students";
import StudentForm from "./StudentForm";

class CreateStudentFormContainer extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    picture: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    // console.table(this.state);
    event.preventDefault();
    this.props.createStudent({
      ...this.state,
      batchId: this.props.batchId
    });
    this.setState({
      first_name: "",
      last_name: "",
      picture: ""
    });
  };

  render() {
    return (
      <StudentForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createStudent }
)(CreateStudentFormContainer);
