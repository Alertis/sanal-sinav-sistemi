import {FETCH_EXAM_PENDING, FETCH_EXAM_FULFILLED, FETCH_EXAM_REJECTED, PUT_EXAM_PENDING, PUT_EXAM_FULFILLED, PUT_EXAM_REJECTED} from './action';

const initialState = {
    examQ: {},
    loading: false,
    reject: false,
    deleteStatus:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXAM_PENDING:
            return {
                ...state,
                loading : true,
                deleteStatus: false,

            }
        case FETCH_EXAM_FULFILLED:
            return {
                ...state,
                examQ : action.payload.data,
                loading : false,
                deleteStatus: false
            }
        case FETCH_EXAM_REJECTED:
            return {
                ...state,
                loading : false,
                deleteStatus: false,
                reject: true,
            }  
        case PUT_EXAM_PENDING:
            return {
                ...state,
                loading : true,
                deleteStatus: false,

            }
        case PUT_EXAM_FULFILLED:
            return {
                ...state,
                loading : false,
                deleteStatus: false
            }
        case PUT_EXAM_REJECTED:
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


