import React from 'react';
import { Link } from "react-router-dom";
import RandomStudent from './RandomStudent'

function BatchDetails(props) {
  // console.log("PROP", props)
  if (!props.batch.batch_number) return "Loading";
  if (!props.batch.students) return "Loading";

  const students = props.batch.students.map(student => {
    if (student.evaluations.length > 0)
      return {
        evaluation: student.evaluations.sort((a, b) => {
          return a.id - b.id
        })[student.evaluations.length - 1],
        student: student.id
      };
    return {
      evaluation: "undefined",
      student
    }
  })


  //Filter out student that have that color
  //const noColor = students.filter(evaluation => evaluation.evaluations = "undefined")
  const greenAmout = students.filter(evaluationGreen => evaluationGreen.evaluation.color === 'green')
  const yellowAmout = students.filter(evaluationYellow => evaluationYellow.evaluation.color === 'yellow')
  const redAmout = students.filter(evaluationRed => evaluationRed.evaluation.color === 'red')


  //Calculate percaentage's colors of student
  const PercentGreen = ((greenAmout.length / students.length) * 100)
  const PercentYellow = ((yellowAmout.length / students.length) * 100)
  const PercentRed = ((redAmout.length / students.length) * 100)

  return (
    <div>
      <h1>Batch # {props.batch.batch_number}</h1>
      {!isNaN(PercentGreen && PercentYellow && PercentRed) ? <div className="w3-light-grey">
        <div className="w3-container w3-green w3-center" style={{ width: Math.floor(PercentGreen) + '%', float: "left" }}>{Math.floor(PercentGreen)}%</div>
        <div className="w3-container w3-yellow w3-center" style={{ width: Math.floor(PercentYellow) + '%', float: "left" }}>{Math.floor(PercentYellow)}%</div>
        <div className="w3-container w3-red w3-center" style={{ width: Math.floor(PercentRed) + '%', float: "left" }}>{Math.floor(PercentRed)}%</div>
      </div>
        :
        <div className="w3-light-grey">
          <div className="w3-container w3-green w3-center" style={{ width: '0%', float: "left" }}>0%</div>
          <div className="w3-container w3-yellow w3-center" style={{ width: '0%', float: "left" }}>0%</div>
          <div className="w3-container w3-red w3-center" style={{ width: '0%', float: "left" }}>0%</div>
        </div>
      }

      <div className="w3-row-padding w3-margin-top w3-center">
        {props.batch.students.map(student => {
          return (
            <div key={student.id} className="w3-third">
              <div className="w3-card">
                <h3>
                  <Link to={`/students/${student.id}`}>{student.first_name} {student.last_name} </Link>
                </h3>
                {!student.picture ?
                  <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt={student.first_name} style={{ width: "50%" }} />
                  :
                  <img src={`${student.picture}`} alt={student.first_name} style={{ width: "50%" }} />
                }
                <div className="w3-container">
                  <h4 style={{ textTransform: 'uppercase' }}>{!student.evaluations.length === 0 ? null : (student.evaluations.map(evaluation => evaluation.color))[student.evaluations.length - 1]}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <RandomStudent
        greenAmout={greenAmout}
        yellowAmout={yellowAmout}
        redAmout={redAmout}
      />
    </div >
  );
}

export default BatchDetails;