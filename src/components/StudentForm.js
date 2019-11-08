import React from 'react';

function StudentForm(props) {
  // console.log("PROPS", props.values)
  const value = props.values

  return (
    <div className="w3-container">
      {!props.editMode ?
        <div>
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
        :
        <div className="w3-margin">
          <div className="w3-container w3-blue-grey">
            <h1>Edit student</h1>
          </div>
          <form onSubmit={props.onEditSubmit}>
            <label>Firstname</label>
            <input className="w3-input" defaultValue={value.first_name} name="first_name" onChange={props.onEditChange} />
            <label>Lastname</label>
            <input className="w3-input" defaultValue={value.last_name} name="last_name" onChange={props.onEditChange} />
            <label>Picture</label>
            <input className="w3-input" defaultValue={value.picture} name="picture" onChange={props.onEditChange} />
            <br />
            <input className="w3-btn w3-blue-grey" type="submit" />
            <input className="w3-btn w3-red" type="cancel" defaultValue="Cancel" onClick={props.cancelEdit} />
          </form>
        </div>
      }
    </div>
  );
}

export default StudentForm;