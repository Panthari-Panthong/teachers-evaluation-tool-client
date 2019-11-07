import { FETCH_EVALUATION_SUCCESS } from '../actions/evaluations'

export default (state = "", action = {}) => {
  switch (action.type) {
    case FETCH_EVALUATION_SUCCESS:
      return action.payload
    default:
      return state;
  }
};