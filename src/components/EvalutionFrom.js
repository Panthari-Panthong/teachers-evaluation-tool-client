import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEvalution } from '../actions/evaluations'


class EvalutionFrom extends Component {
  componentDidMount() {
    this.props.loadEvalution(Number(this.props.match.params.id));
  }

  goBack = () => {
    this.props.history.push(`/batch/${this.props.batch.id}/students/${this.props.evaluation.studentId}`)
  }

  render() {
    // console.log("PROPS", this.props.evaluation)
    // console.log("PROPS", this.props.evaluation)
    const evaluation = this.props.evaluation
    return (
      <div className="w3-container w3-display-middle" style={{ width: "80%" }}>
        <h3>Evaluation Detail</h3>
        <ul className="w3-ul w3-card-4" style={{ width: "50%" }}>
          <li>Date : {evaluation.date}</li>
          {evaluation.remark ? <li>Remark : {evaluation.remark}</li> : <li>Remark : No remark</li>}
          <li>Color : {evaluation.color}</li>
        </ul>
        <button className="w3-button w3-section w3-blue-grey w3-ripple" onClick={this.goBack}>Go back</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //evaluation: state.student.evaluations.map(evaluation => evaluation.id === this.props.match.params.id)
    evaluation: state.evaluation,
    batch: state.batch
  };
}

export default connect(
  mapStateToProps, { loadEvalution }
)(EvalutionFrom);