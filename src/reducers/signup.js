import { SIGNUP_SUCCESS } from '../actions/teacher'

export default (state = "", action = {}) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      // console.log('From reducer', action.payload)
      return action.payload
    default:
      return state;
  }
}
