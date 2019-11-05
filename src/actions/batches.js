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

export const loadBatch = id => (dispatch, getState) => {
  console.log("CAN WE GET THE STATE??", getState());
  request(`${url}/batches/${id}`).then(response => {
    console.log(response);
    dispatch(fetchBatchSuccess(response.body));
  });
};