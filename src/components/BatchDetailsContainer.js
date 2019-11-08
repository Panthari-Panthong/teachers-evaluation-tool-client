import React, { Component } from 'react';
import { connect } from 'react-redux';
import BatchDetails from './BatchDetails'
import { loadBatch } from '../actions/batches'
import CreateStudentFormContainer from './CreateStudentFormContainer'

class BatchDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadBatch(Number(this.props.match.params.id));
  }


  render() {
    return (
      <div>
        <BatchDetails batch={this.props.batch} />
        <CreateStudentFormContainer batchId={this.props.batch.id} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    batch: state.batch
  };
}

export default connect(
  mapStateToProps, { loadBatch }
)(BatchDetailsContainer);