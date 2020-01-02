import axios from 'axios';

export const FETCH_EXAM_PENDING = 'FETCH_EXAM_PENDING';
export const FETCH_EXAM_FULFILLED = 'FETCH_EXAM_FULFILLED';
export const FETCH_EXAM_REJECTED = 'FETCH_EXAM_REJECTED';

export const PUT_EXAM_PENDING = 'PUT_EXAM_PENDING';
export const PUT_EXAM_FULFILLED = 'PUT_EXAM_FULFILLED';
export const PUT_EXAM_REJECTED = 'PUT_EXAM_REJECTED';

export function fetchExam () {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization')}`;
    return dispatch => {
        dispatch({
            type : 'FETCH_EXAM',
            payload : axios.get(`${process.env.REACT_APP_API_BASE}/exam`)
        })
    }
}

export function updateExam (id) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization')}`;
    return dispatch => {
        dispatch({
            type : 'PUT_EXAM',
            payload : axios.put(`${process.env.REACT_APP_API_BASE}/exams/${id}`,{isCorrect: true, isAnswered: true})
        })
    }
}