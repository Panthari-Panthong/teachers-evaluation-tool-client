import request from "superagent";
import { url } from '../constants'

export const STUDENT_CREATE_SUCCESS = "STUDENT_CREATE_SUCCESS";

const studentCreateSuccess = student => ({
  type: STUDENT_CREATE_SUCCESS,
  payload: student
});

export const createStudent = data => (dispatch, getState) => {
  // console.log("STUDENT", data)
  // const token = getState().auth;

  request
    .post(`${url}/students`)
    // .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(studentCreateSuccess(response.body));
    })
    .catch(console.error);
};


export const FETCH_STUDENT_SUCCESS = "FETCH_STUDENT_SUCCESS";

const fetchStudentSuccess = student => ({
  type: FETCH_STUDENT_SUCCESS,
  payload: student
});

export const loadStudent = id => (dispatch, getState) => {
  request(`${url}/students/${id}`)
    .then(response => {
      // console.log(response);
      dispatch(fetchStudentSuccess(response.body));
    });
};


export const deleteStudent = (id) => (dispatch) => {
  console.log("ID from Delete function", id)
  request
    .delete(`${url}/students/${id}`)
    .then(response => {
      dispatch(studentDelete(id))
    })
    .catch(console.error)

}

export const STUDENT_DELETE_SUCCESS = 'STUDENT_DELETE_SUCCESS'
const studentDelete = id => ({
  type: 'STUDENT_DELETE_SUCCESS',
  id
})



export const updateStudent = (id, data) => (dispatch) => {
  console.log("ID", id, data)
  request
    .put(`${url}/students/${id}`)
    .send(data)
    .then(response => {
      console.log("updateStudent", response.body)
      dispatch(studentUpdate(response.body))
    })
    .catch(console.error)

}

export const STUDENT_UPDATE_SUCCESS = 'STUDENT_UPDATE_SUCCESS'
export const studentUpdate = (student, id) => ({
  type: 'STUDENT_UPDATE_SUCCESS',
  student, id
})
