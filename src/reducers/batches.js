import {
  BATCHES_FETCHED,
  BATCH_CREATE_SUCCESS
} from '../actions/batches'

import { STUDENT_DELETE_SUCCESS } from '../actions/students'
// import { EVALUATION_CREATE_SUCCESS } from '../actions/evaluations'


export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case BATCHES_FETCHED:
      return [...state, ...action.payload];
    case BATCH_CREATE_SUCCESS:
      return [...state, { ...action.payload }];
    case STUDENT_DELETE_SUCCESS:
      return state.filter(student => student.id !== action.id)
    // case EVALUATION_CREATE_SUCCESS:
    //   return state.map(student => student.id === action.evaluation.studentId ? [] : student)
    default:
      return state;
  }
};
