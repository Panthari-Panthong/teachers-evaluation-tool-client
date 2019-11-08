import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterColor extends Component {
  state = {
    color: ''
  }

  onChange = (event) => {
    console.log("EVENT", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
    if (this.state.color === 'red') {
      return console.log("RED")
    }
  }



  render() {
    // console.log("PROPS", this.props)
    return (
      <div className="col-md-4">
        <label>Filter by
          <select className="form-control" onChange={this.onChange}>
            <option value="">Select</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>
        </label>
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
  mapStateToProps,
)(FilterColor);