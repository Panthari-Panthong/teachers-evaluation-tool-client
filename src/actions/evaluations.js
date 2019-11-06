import request from "superagent";
import { url } from '../constants'


export const createEvaluation = (data) => (dispatch) => {
  request
    .post(`${url}/evaluations`)
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

