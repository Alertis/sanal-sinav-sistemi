import {FETCH_QUESTIONS_PENDING, FETCH_QUESTIONS_FULFILLED, FETCH_QUESTIONS_REJECTED,ADD_QUESTIONS_PENDING, ADD_QUESTIONS_FULFILLED, ADD_QUESTIONS_REJECTED,
DELETE_QUESTIONS_PENDING, DELETE_QUESTIONS_FULFILLED, DELETE_QUESTIONS_REJECTED } from './action';

const initialState = {
    questions: [],
    questionDetail:{},
    loading: false,
    reject: false,
    deleteStatus:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_PENDING:
            return {
                ...state,
                loading : true,
                deleteStatus: false,

            }
        case FETCH_QUESTIONS_FULFILLED:
            return {
                ...state,
                questions : action.payload.data,
                loading : false,
                deleteStatus: false
            }
        case FETCH_QUESTIONS_REJECTED:
            localStorage.removeItem("authorization")
            window.location.href="/login"
            return {
                ...state,
                loading : false,
                deleteStatus: false,
                reject: true,
            }
         case ADD_QUESTIONS_PENDING:
            return {
                ...state,
                loading : true,
                deleteStatus: false,

            }
        case ADD_QUESTIONS_FULFILLED:
            return {
                ...state,
                questions : action.payload.data,
                loading : false,
                deleteStatus: false,
            }
        case ADD_QUESTIONS_REJECTED:
            localStorage.removeItem("authorization")
            window.location.href="/login"
            return {
                ...state,
                loading : false,
                reject: true,
                deleteStatus: false,

            }
        case DELETE_QUESTIONS_PENDING:
            return {
                ...state,
                loading : true,
                deleteStatus: false,

            }
        case DELETE_QUESTIONS_FULFILLED:
            return {
                ...state,
                deleteStatus: true,
                loading : false,

            }
        case DELETE_QUESTIONS_REJECTED:
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


