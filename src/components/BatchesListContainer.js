import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadbatches } from '../actions/batches'
import BatchesList from './BatchesList'
import CreateBatchFormContainer from './CreateBatchFormContainer'


class BatchesListContainer extends Component {
  componentDidMount() {
    this.props.loadbatches()
  }
  render() {
    return (
      <div>
        <BatchesList batches={this.props.batches} />
        <CreateBatchFormContainer />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    batches: state.batches
  };
}

export default connect(
  mapStateToProps, { loadbatches }
)(BatchesListContainer);