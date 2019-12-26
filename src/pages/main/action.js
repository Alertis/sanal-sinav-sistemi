import axios from 'axios';

export const FETCH_QUESTIONS_PENDING = 'FETCH_QUESTIONS_PENDING';
export const FETCH_QUESTIONS_FULFILLED = 'FETCH_QUESTIONS_FULFILLED';
export const FETCH_QUESTIONS_REJECTED = 'FETCH_QUESTIONS_REJECTED';


function apiHeader(authorization) {
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization' : 'Bearer '+ authorization ,
    };
}


export function fetchQuestions () {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization')}`;
    return dispatch => {
        dispatch({
            type : 'FETCH_QUESTIONS',
            payload : axios.get(`${process.env.REACT_APP_API_BASE}/questions`)
        })

    }
    
}
