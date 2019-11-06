import request from "superagent";
import { url } from '../constants'

export const BATCHES_FETCHED = "BATCHES_FETCHED";

const batchesFetched = batches => ({
  type: BATCHES_FETCHED,
  payload: batches
});

export const loadbatches = () => (dispatch, getState) => {
  if (getState().batches.length !== 0) return;

  request(`${url}/batches`)
    .then(response => {
      dispatch(batchesFetched(response.body));
    })
    .catch(console.error);
};


export const FETCH_BATCH_SUCCESS = "FETCH_BATCH_SUCCESS";

const fetchBatchSuccess = batch => ({
  type: FETCH_BATCH_SUCCESS,
  payload: batch
});


export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
const fetchStudentsSuccess = students => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: students
});

export const loadBatch = id => (dispatch, getState) => {
  // console.log("CAN WE GET THE STATE??", getState());
  request(`${url}/batches/${id}`).then(response => {
    // const student = response.body.students.map(student => student.evaluations.sort((a, b) => b.id - a.id));
    // let lastcolor = student[0];
    // console.log("STUDENT", lastcolor)
    // console.log(response.body.students)
    dispatch(fetchBatchSuccess(response.body));
    dispatch(fetchStudentsSuccess(response.body.students));
  });
};





//create batch

export const BATCH_CREATE_SUCCESS = "BATCH_CREATE_SUCCESS";

const batchCreateSuccess = batch => ({
  type: BATCH_CREATE_SUCCESS,
  payload: batch
});

export const createBatch = data => (dispatch, getState) => {
  // const token = getState().auth;

  request
    .post(`${url}/batches`)
    // .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(batchCreateSuccess(response.body));
    })
    .catch(console.error);
};
