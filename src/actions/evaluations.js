import request from "superagent";
import { url } from '../constants'


export const createEvaluation = (data) => (dispatch) => {
  console.log("ID from Delete function", data)
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

