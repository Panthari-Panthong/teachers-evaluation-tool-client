import { combineReducers } from 'redux'
import batches from './batches'
import batch from './batch'
import student from './student'
import students from './students'
import auth from "./auth";
import signup from './signup'
// import evaluations from './evaluations'

export default combineReducers({
  batches,
  batch,
  student,
  students,
  auth,
  signup,
  // evaluations
})