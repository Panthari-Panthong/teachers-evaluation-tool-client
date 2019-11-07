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
      {editMode && <StudentForm values={props.formValues} onEditChange={props.onEditChange} onEditSubmit={props.onEditSubmit} />}
      {!editMode &&
        <div className="w3-container w3-margin">
          <div className="w3-row">
            <div className="w3-container w3-third">
              {!props.student.picture ?
                <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt="avatar" style={{ width: "80%" }} />
                :
                <img src={`${props.student.picture}`} alt={props.student.first_name} style={{ width: "20%" }} />
              }
            </div>
            <div className="w3-container w3-twothird">
              <h1>{props.student.first_name}  {props.student.last_name}</h1>
              <h3>Batch # {props.student.batch.batch_number}</h3>
              {/* <h3>{props.student.evaluations.map(evaluation => evaluation.color)}</h3> */}
              {props.student.evaluations.map(evaluation => {
                if (evaluation.color === "red") {
                  return <img src={red} alt="red" key={evaluation.id} style={{ width: "7%" }} />
                } else if (evaluation.color === "green") {
                  return <img src={green} alt="green" key={evaluation.id} style={{ width: "7%" }} />
                } else if (evaluation.color === "yellow") {
                  return <img src={yellow} alt="yellow" key={evaluation.id} style={{ width: "7%" }} />
                }
                return evaluation
              })}
            </div>
          </div>
          <button onClick={props.onDelete}>DELETE</button>
          <button onClick={props.onEdit}>EDIT</button>
          <p>Daily Evaluation for {props.value.date}</p>
          <form onSubmit={props.onSubmitEva} >
            <textarea placeholder="Remarks..." name="remark" value={props.value.remark} onChange={props.onChange} />
            <input type="radio" name="color" value="red" onChange={props.onChange} />RED
            <input type="radio" name="color" value="yellow" onChange={props.onChange} />YELLOW
            <input type="radio" name="color" value="green" onChange={props.onChange} />GREEN
            <input type="submit" value="Save" />
          </form>
        </div>
      }
    </div>
  );
}

export default StudentDetail;