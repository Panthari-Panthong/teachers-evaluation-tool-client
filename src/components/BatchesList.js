import React from "react";
import { Link } from "react-router-dom";

export default function BatchesList(props) {
  if (!props.batches) return "Loading";

  return (
    <div className="w3-row-padding w3-margin">
      {props.batches.map(batch => {
        return (
          <div key={batch.id} className="w3-third w3-margin-bottom">
            <ul className="w3-ul w3-border w3-center w3-hover-shadow">
              <li className="w3-blue-grey w3-xlarge w3-padding-32">
                <Link to={`/batches/${batch.id}`}>Batch #{batch.batch_number}</Link>
              </li>
              {!batch.students ? <li className="w3-padding-16">0 Student</li> : <li className="w3-padding-16">{Object.keys(batch.students).length} Students</li>}

              <li className="w3-padding-16">Start date : {batch.start_date}</li>
              <li className="w3-padding-16">End date : {batch.end_date}</li>

            </ul>
          </div>
        );
      })}

    </div>
  );
}

