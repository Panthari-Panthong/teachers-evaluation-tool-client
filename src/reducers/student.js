import { FETCH_STUDENT_SUCCESS } from '../actions/students'
import { EVALUATION_CREATE_SUCCESS } from '../actions/evaluations'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_STUDENT_SUCCESS:
      return { ...action.payload };
    case EVALUATION_CREATE_SUCCESS:
      return {
        ...state,
        evaluations: [...state.evaluations, action.evaluation]
      }
    default:
      return state;
  }
};