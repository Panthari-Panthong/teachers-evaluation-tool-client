import { FETCH_STUDENTS_SUCCESS } from '../actions/batches'


export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_STUDENTS_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};