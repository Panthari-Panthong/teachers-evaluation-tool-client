import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/teacher";

// const token = localStorage.getItem("jwt");
// const initialState = token ? token : null;

export default (state = '', action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // localStorage.setItem("auth", action.payload);
      return action.payload;
    case LOGOUT_SUCCESS:
      return ''
    default:
      return state;
  }
};
