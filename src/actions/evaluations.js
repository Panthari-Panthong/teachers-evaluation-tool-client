import request from "superagent";
import { url } from '../constants'


export const createEvaluation = (data) => (dispatch, getState) => {
  // console.log("DATA", data)
  const token = getState().auth;

  request
    .post(`${url}/evaluations`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(evaluationCreateSuccess(response.body))
    })
    .catch(console.error)

}

export const EVALUATION_CREATE_SUCCESS = 'EVALUATION_CREATE_SUCCESS'
const evaluationCreateSuccess = evaluation => ({
  type: 'EVALUATION_CREATE_SUCCESS',
  evaluation
})


export const loadEvaluations = () => (dispatch, getState) => {
  request(`${url}/evaluations`)
    .then(response => {
      // console.log(response);
      dispatch(evaluationFetchSuccess(response.body));
    });
};


export const EVALUATION_FETCH_SUCCESS = 'EVALUATION_FETCH_SUCCESS'
const evaluationFetchSuccess = evaluations => ({
  type: 'EVALUATION_FETCH_SUCCESS',
  evaluations
})

export const loadEvalution = id => (dispatch, getState) => {
  // console.log("CAN WE GET THE STATE??", getState());
  // console.log("ID", id)
  request(`${url}/evaluations/${id}`)
    .then(response => {
      // console.log("WHAT I GET", response.body)
      dispatch(fetchEvaluationSuccess(response.body));
    });
};

export const FETCH_EVALUATION_SUCCESS = "FETCH_EVALUATION_SUCCESS";

const fetchEvaluationSuccess = evaluation => ({
  type: FETCH_EVALUATION_SUCCESS,
  payload: evaluation
});

