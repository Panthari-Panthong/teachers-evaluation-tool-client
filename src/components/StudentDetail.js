import React from 'react';
import StudentForm from './StudentForm'
import red from '../img/red.png'
import green from '../img/green.png'
import yellow from '../img/yellow.png'

function StudentDetail(props) {
  if (!props.student) return "Loading";
  if (!props.student.evaluations) return "Loading";
  if (!props.student.batch) return "Loading";
  // console.log("PROPS", props)

  const editMode = props.editMode

  return (
    <div>
      {editMode && <StudentForm editMode={props.editMode} values={props.formValues} onEditChange={props.onEditChange} onEditSubmit={props.onEditSubmit} />}
      {!editMode &&
        <div className="w3-container w3-margin">
          <div className="w3-row">
            <div className="w3-container w3-third">
              {!props.student.picture ?
                <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt="avatar" style={{ width: "50%" }} />
                :
                <img src={`${props.student.picture}`} alt={props.student.first_name} style={{ width: "50%" }} />
              }
              <div className="w3-bar" style={{ width: "50%" }}>
                <button className="w3-button w3-ripple w3-red" style={{ width: "50%" }} onClick={props.onDelete}>DELETE</button>
                <button className="w3-button w3-ripple w3-blue-grey" style={{ width: "50%" }} onClick={props.onEdit}>EDIT</button>
              </div>
            </div>
            <div className="w3-container w3-twothird">
              <h1>{props.student.first_name}  {props.student.last_name}</h1>
              <h3>Batch # {props.student.batch.batch_number}</h3>
              {/* <h3>{props.student.evaluations.map(evaluation => evaluation.color)}</h3> */}
              {props.student.evaluations.map(evaluation => {
                if (evaluation.color === "red") {
                  return <img src={red} alt="red" key={evaluation.id} style={{ width: "5%" }} />
                } else if (evaluation.color === "green") {
                  return <img src={green} alt="green" key={evaluation.id} style={{ width: "5%" }} />
                } else if (evaluation.color === "yellow") {
                  return <img src={yellow} alt="yellow" key={evaluation.id} style={{ width: "5%" }} />
                }
                return evaluation
              })}
            </div>
          </div>
          <div className="w3-container w3-margin">
            <h4>Daily Evaluation for {props.value.date}</h4>
            <div className="w3-row">
              <form onSubmit={props.onSubmitEva} >
                <div className="w3-container w3-quarter">
                  <div className="w3-bar-block">
                    <label className="w3-bar-item"><input className="w3-radio" type="radio" name="color" value="red" onChange={props.onChange} />RED</label>
                    <label className="w3-bar-item"><input className="w3-radio" type="radio" name="color" value="yellow" onChange={props.onChange} />YELLOW</label>
                    <label className="w3-bar-item"><input className="w3-radio" type="radio" name="color" value="green" onChange={props.onChange} />GREEN</label>
                  </div>
                </div>
                <div className="w3-container w3-threequarter">
                  <textarea rows="4" cols="50" className="w3-input w3-border" style={{ width: "50%" }} placeholder="Remarks..." name="remark" value={props.value.remark} onChange={props.onChange} />
                  <input className="w3-btn w3-blue-grey" type="submit" value="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default StudentDetail;