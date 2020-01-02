import axios from 'axios';

export const ADD_EXAM_PENDING = 'ADD_EXAM_PENDING';
export const ADD_EXAM_FULFILLED = 'ADD_EXAM_FULFILLED';
export const ADD_EXAM_REJECTED = 'ADD_EXAM_REJECTED';



export function addExam (data) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization')}`;
    return dispatch => {
        dispatch({
            type : 'ADD_EXAM',
            payload : axios.post(`${process.env.REACT_APP_API_BASE}/details`,data)
        })
    }
}
