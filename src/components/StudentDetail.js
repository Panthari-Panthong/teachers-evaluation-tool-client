import React from 'react';

function StudentDetail(props) {
  if (!props.student) return "Loading";
  if (!props.student.evaluations) return "Loading";
  if (!props.student.batch) return "Loading";
  // console.log("PROPS", props)


  return (

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
          <h3>{props.student.evaluations.map(evaluation => evaluation.color)}</h3>
        </div>
      </div>
      <button onClick={props.onDelete}>DELETE</button>
      <button>EDIT</button>
      <p>Daily Evaluation for {props.value.date}</p>
      <form onSubmit={props.onSubmit}>
        <textarea placeholder="Remarks..." name="remark" value={props.value.remark} onChange={props.onChange} />
        <input type="radio" name="color" value="red" onChange={props.onChange} />RED
        <input type="radio" name="color" value="yellow" onChange={props.onChange} />YELLOW
        <input type="radio" name="color" value="green" onChange={props.onChange} />GREEN
        <input type="submit" value="Save" />
        <input type="submit" value="Save and Next" />
      </form>
    </div>
  );
}

export default StudentDetail;