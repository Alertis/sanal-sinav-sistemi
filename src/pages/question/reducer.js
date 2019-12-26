import {FETCH_QUESTIONS_PENDING, FETCH_QUESTIONS_FULFILLED, FETCH_QUESTIONS_REJECTED } from './action';

const initialState = {
    questions: [],
    loading: false,
    reject: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_PENDING:
            return {
                ...state,
                loading : true,
            }
        case FETCH_QUESTIONS_FULFILLED:
            console.log(action.payload)
            return {
                ...state,
                questions : action.payload.data,
                loading : false,
            }
        case FETCH_QUESTIONS_REJECTED:
            localStorage.removeItem("authorization")
            window.location.href="/login"
            return {
                ...state,
                loading : false,
                reject: true
            }
        default:
            return state;
    }
}


