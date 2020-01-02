import {ADD_EXAM_PENDING, ADD_EXAM_FULFILLED, ADD_EXAM_REJECTED} from './action';

const initialState = {
    examDetail: {},
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
        default:
            return state;
    }
}


