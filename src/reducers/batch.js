import { FETCH_BATCH_SUCCESS, BATCH_CREATE_SUCCESS } from "../actions/batches";
import { STUDENT_CREATE_SUCCESS, STUDENT_DELETE_SUCCESS, STUDENT_UPDATE_SUCCESS } from '../actions/students'
import { EVALUATION_CREATE_SUCCESS } from '../actions/evaluations'


export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_BATCH_SUCCESS:
      return { ...action.payload };
    case BATCH_CREATE_SUCCESS:
      return { ...action.payload, students: [] };
    case STUDENT_CREATE_SUCCESS:
      return {
        ...state,
        students: [...state.students, { ...action.payload, evaluations: [] }]
      }
    case STUDENT_DELETE_SUCCESS:
      return {
        ...state,
        students: state.students.filter(student => student.id !== action.id)
      }
    case EVALUATION_CREATE_SUCCESS:
      return {
        ...state,
        students: state.students.map(student => {
          if (student.id === action.evaluation.studentId) {
            return { ...student, evaluations: [action.evaluation] }
          } else {
            return student
          }
        })

      }
    case STUDENT_UPDATE_SUCCESS:
      return {
        ...state,
        students: state.students.map(student => {
          if (student.id === action.student.id) {
            return { ...student, ...action.student }
          } else {
            return student
          }
        })

      }

    default:
      return state;
  }
};