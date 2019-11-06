import React from "react";
import { connect } from "react-redux";
import { createBatch } from "../actions/batches";
import BatchForm from "./BatchForm";

class CreateBatchFormContainer extends React.Component {
  state = {
    batch_number: "",
    start_date: "",
    end_date: "",
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    // console.table(this.state)
    event.preventDefault();
    this.props.createBatch(this.state);
    this.setState({
      batch_number: "",
      start_date: "",
      end_date: "",
    });
  };

  render() {
    return (
      <BatchForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createBatch }
)(CreateBatchFormContainer);