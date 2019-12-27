import axios from 'axios';

export const FETCH_QUESTIONS_PENDING = 'FETCH_QUESTIONS_PENDING';
export const FETCH_QUESTIONS_FULFILLED = 'FETCH_QUESTIONS_FULFILLED';
export const FETCH_QUESTIONS_REJECTED = 'FETCH_QUESTIONS_REJECTED';

export const FETCH_QUESTIONS_DETAIL_PENDING = 'FETCH_QUESTIONS_DETAIL_PENDING';
export const FETCH_QUESTIONS_DETAIL_FULFILLED = 'FETCH_QUESTIONS_DETAIL_FULFILLED';
export const FETCH_QUESTIONS_DETAIL_REJECTED = 'FETCH_QUESTIONS_DETAIL_REJECTED';

export const ADD_QUESTIONS_PENDING = 'ADD_QUESTIONS_PENDING';
export const ADD_QUESTIONS_FULFILLED = 'ADD_QUESTIONS_FULFILLED';
export const ADD_QUESTIONS_REJECTED = 'ADD_QUESTIONS_REJECTED';

export const DELETE_QUESTIONS_PENDING = 'DELETE_QUESTIONS_PENDING';
export const DELETE_QUESTIONS_FULFILLED = 'DELETE_QUESTIONS_FULFILLED';
export const DELETE_QUESTIONS_REJECTED = 'DELETE_QUESTIONS_REJECTED';

export function fetchQuestions () {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization')}`;
    return dispatch => {
        dispatch({
            type : 'FETCH_QUESTIONS',
            payload : axios.get(`${process.env.REACT_APP_API_BASE}/questions`)
        })
    }
}

export function fetchQuestionDetail (id) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization')}`;
    return dispatch => {
        dispatch({
            type : 'FETCH_QUESTIONS_DETAIL',
            payload : axios.get(`${process.env.REACT_APP_API_BASE}/questions/${id}`)
        })
    }
}

export function addQuestion (question) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization')}`;
    return dispatch => {
        dispatch({
            type : 'ADD_QUESTIONS',
            payload : axios.post(`${process.env.REACT_APP_API_BASE}/questions`,question)
        })
    }
}

export function editQuestion (question) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization')}`;
    return dispatch => {
        dispatch({
            type : 'EDIT_QUESTIONS',
            payload : axios.post(`${process.env.REACT_APP_API_BASE}/questions`,question)
        })
    }
}

export function deleteQuestion (id) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization')}`;
    return dispatch => {
        dispatch({
            type : 'DELETE_QUESTIONS',
            payload : axios.delete(`${process.env.REACT_APP_API_BASE}/questions/${id}`)
        })
    }
}