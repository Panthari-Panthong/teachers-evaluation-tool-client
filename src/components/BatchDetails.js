import React from 'react';

function BatchDetails(props) {
  console.log("PROP", props)

  if (!props.batch.batch_number) return "Loading";


  return (
    <div>
      <h1>Batch # {props.batch.batch_number}</h1>
      <ul>
        {props.batch.students.map(student => {
          return (
            <li key={student.id}>
              {student.full_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BatchDetails;