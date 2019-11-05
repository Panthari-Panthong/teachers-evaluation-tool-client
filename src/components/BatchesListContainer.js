import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadbatches } from '../actions/batches'
import BatchesList from '../components/BatchesList'


class BatchesListContainer extends Component {
  componentDidMount() {
    this.props.loadbatches()
  }
  render() {
    return (
      <BatchesList batches={this.props.batches} />
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