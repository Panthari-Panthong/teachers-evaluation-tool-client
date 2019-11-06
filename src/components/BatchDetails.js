import React from 'react';
import { Link } from "react-router-dom";
import RandomStudent from './RandomStudent'

function BatchDetails(props) {
  // console.log("PROP", props)
  if (!props.batch.batch_number) return "Loading";
  if (!props.batch.students) return "Loading";

  const students = props.batch.students.map(student => {
    if (student.evaluations.length > 0) {
      return {
        evaluation: student.evaluations.sort((a, b) => {
          return a.id - b.id
        })[student.evaluations.length - 1]
      }
    } return {
      evaluation: "undefined",
      student
    }
  })


  //Filter out student that have that color
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
      <div className="w3-light-grey">
        <div className="w3-container w3-green w3-center" style={{ width: Math.floor(PercentGreen) + '%', float: "left" }}>{Math.floor(PercentGreen)}%</div>
        <div className="w3-container w3-yellow w3-center" style={{ width: Math.floor(PercentYellow) + '%', float: "left" }}>{Math.floor(PercentYellow)}%</div>
        <div className="w3-container w3-red w3-center" style={{ width: Math.floor(PercentRed) + '%', float: "left" }}>{Math.floor(PercentRed)}%</div>
      </div><br />

      <ul>
        {props.batch.students.map(student => {
          return (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>{student.full_name} </Link>
              <p>{!student.evaluations.length === 0 ? null : (student.evaluations.map(evaluation => evaluation.color))[student.evaluations.length - 1]}</p>
            </li>
          );
        })}
      </ul>
      <RandomStudent
        greenAmout={greenAmout}
        yellowAmout={yellowAmout}
        redAmout={redAmout}
      />
    </div >
  );
}

export default BatchDetails;