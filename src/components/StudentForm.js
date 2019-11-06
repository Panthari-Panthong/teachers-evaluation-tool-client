import React from 'react';

function StudentForm(props) {
  return (
    <div>
      <h1>Add student</h1>
      <form onSubmit={props.onSubmit}>
        <label>Student name:</label>
        <input value={props.values.full_name} name="full_name" onChange={props.onChange} />
        <label>Picture :</label>
        <input value={props.values.picture} name="picture" onChange={props.onChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default StudentForm;