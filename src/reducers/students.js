import { FETCH_STUDENTS_SUCCESS } from '../actions/batches'
// import { EVALUATION_CREATE_SUCCESS } from '../actions/evaluations'

export default (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_STUDENTS_SUCCESS:
      return [...action.payload];
    // case EVALUATION_CREATE_SUCCESS:
    //   return [
    //     ...state.map(student => student.id === action.evaluation.studentId ? { evaluations: [...state.evaluations, action.evaluation] } : student)
    //   ]
    default:
      return state;
  }
};