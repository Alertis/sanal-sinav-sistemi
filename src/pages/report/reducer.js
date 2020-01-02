import {ADD_EXAM_PENDING, ADD_EXAM_FULFILLED, ADD_EXAM_REJECTED, FETCH_REPORTS_PENDING, FETCH_CATEGORY_REPORTS_FULFILLED,
 FETCH_CATEGORY_REPORTS_REJECTED, FETCH_CATEGORY_REPORTS_PENDING, FETCH_REPORTS_FULFILLED, FETCH_REPORTS_REJECTED} from './action';

const initialState = {
    examDetail: {},
    reports:[],
    reportsCategory:[],
    loading: false,
    reject: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXAM_PENDING:
            return {
                ...state,
                loading : true,

            }
        case ADD_EXAM_FULFILLED:
            return {
                ...state,
                examDetail : action.payload.data,
                loading : false
            }
        case ADD_EXAM_REJECTED:
            localStorage.removeItem("authorization")
            window.location.href="/login"
            return {
                ...state,
                loading : false,
                deleteStatus: false,
                reject: true,
            }
        case  FETCH_REPORTS_PENDING:
            return {
                ...state,
                loading : true,

            }
        case  FETCH_REPORTS_FULFILLED:
            return {
                ...state,
                reports : action.payload.data,
                loading : false
            }
        case  FETCH_REPORTS_REJECTED:
            localStorage.removeItem("authorization")
            window.location.href="/login"
            return {
                ...state,
                loading : false,
                deleteStatus: false,
                reject: true,
            }
        case  FETCH_CATEGORY_REPORTS_PENDING:
            return {
                ...state,
                loading : true,

            }
        case  FETCH_CATEGORY_REPORTS_FULFILLED:
            return {
                ...state,
                reportsCategory : action.payload.data,
                loading : false
            }
        case  FETCH_CATEGORY_REPORTS_REJECTED:
            localStorage.removeItem("authorization")
            window.location.href="/login"
            return {
                ...state,
                loading : false,
                deleteStatus: false,
                reject: true,
            }
        default:
            return state;
    }
}


