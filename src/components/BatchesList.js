import React from "react";
import { Link } from "react-router-dom";

export default function BatchesList(props) {
  if (!props.batches) return "Loading";

  return (
    <div>
      {props.batches.map(batch => {
        return (
          <li key={batch.id}>
            <Link to={`/batches/${batch.id}`}>Batch #{batch.batch_number}</Link>
            <p>{Object.keys(batch.students).length} Students</p>
          </li>
        );
      })}
    </div>
  );
}

