import React, { Component } from 'react';
import { connect } from 'react-redux';
import BatchDetails from './BatchDetails'
import { loadBatch } from '../actions/batches'

class BatchDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadBatch(Number(this.props.match.params.id));
  }

  render() {
    return (
      <BatchDetails batch={this.props.batch} />
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