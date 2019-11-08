import React from 'react';

function BatchForm(props) {
  // console.log("PROPS", props)
  return (
    <div className="w3-container">
      <div className="w3-container w3-blue-grey">
        <h2>Add batch</h2>
      </div>
      <form onSubmit={props.onSubmit} className="w3-container">
        <label>Batch Number</label>
        <input className="w3-input" value={props.values.batch_number} name="batch_number" onChange={props.onChange} type="number" />
        <label>Start Date</label>
        <input className="w3-input" value={props.values.start_date} name="start_date" onChange={props.onChange} type="date" />
        <label>End Date</label>
        <input className="w3-input" value={props.values.end_date} name="end_date" onChange={props.onChange} type="date" />
        <input className="w3-btn w3-blue-grey" type="submit" />
      </form>
    </div>

  );
}

export default BatchForm;