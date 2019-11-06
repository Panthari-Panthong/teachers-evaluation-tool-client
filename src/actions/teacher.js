import request from "superagent";
import { url } from '../constants'

//login Authentication
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (email, password) => (dispatch, getState) => {
  request
    .post(`${url}/login`)
    .send({ email, password })
    .then(response => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.body.jwt });
    })
    .catch(console.error);
};


export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const logout = () => ({
  type: LOGOUT_SUCCESS
})


export const signup = (email, password) => (dispatch, getState) => {
  request
    .post(`${url}/teachers`)
    .send({ email, password })
    .then(response => {
      dispatch(signupsuccess(response.body.message))
    })
    .catch(console.error)
}


export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const signupsuccess = (message) => ({
  type: 'SIGNUP_SUCCESS',
  payload: message
})
