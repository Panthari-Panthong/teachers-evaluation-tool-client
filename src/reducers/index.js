import { combineReducers } from 'redux'
import batches from './batches'
import batch from './batch'


export default combineReducers({
  // your reducers will go here
  batches,
  batch
})