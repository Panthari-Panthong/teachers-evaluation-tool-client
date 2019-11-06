import { FETCH_BATCH_SUCCESS } from "../actions/batches";
import { STUDENT_CREATE_SUCCESS, STUDENT_DELETE_SUCCESS } from '../actions/students'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_BATCH_SUCCESS:
      return { ...action.payload };
    case STUDENT_CREATE_SUCCESS:
      return {
        ...state,
        students: [...state.students, action.payload]
      }
    case STUDENT_DELETE_SUCCESS:
      return {
        ...state,
        students: state.students.filter(student => student.id !== action.id)
      }

    default:
      return state;
  }
};