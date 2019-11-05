import {
  BATCHES_FETCHED
} from '../actions/batches'

export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case BATCHES_FETCHED:
      // console.log("NEW STATE", [...state, ...action.payload]); // try your transformation here
      return [...state, ...action.payload];

    default:
      return state;
  }
};
