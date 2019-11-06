import React from 'react';

function StudentForm(props) {
  return (
    <div className="w3-container">
      <div className="w3-container w3-blue-grey">
        <h1>Add student</h1>
      </div>
      <form onSubmit={props.onSubmit}>
        <label>Firstname</label>
        <input className="w3-input" value={props.values.first_name} name="first_name" onChange={props.onChange} />
        <label>Lastname</label>
        <input className="w3-input" value={props.values.last_name} name="last_name" onChange={props.onChange} />
        <label>Picture</label>
        <input className="w3-input" value={props.values.picture} name="picture" onChange={props.onChange} />
        <br />
        <input className="w3-btn w3-blue-grey" type="submit" />
      </form>
    </div>
  );
}

export default StudentForm;