import {
  BATCHES_FETCHED,
  BATCH_CREATE_SUCCESS
} from '../actions/batches'

import { STUDENT_DELETE_SUCCESS, STUDENT_CREATE_SUCCESS } from '../actions/students'


export default (state = [], action = {}) => {
  //console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case BATCHES_FETCHED:
      return [...state, ...action.payload];
    case BATCH_CREATE_SUCCESS:
      return [...state, { ...action.payload, students: [] }];
    case STUDENT_DELETE_SUCCESS:
      return state.filter(student => student.id !== action.id)
    case STUDENT_CREATE_SUCCESS:
      return state.map(batch => {
        if (batch.id === action.payload.batchId) {
          return { ...batch, students: [...batch.students, { ...action.payload }] }
        } else {
          return batch
        }

      })
    default:
      return state;
  }
};
