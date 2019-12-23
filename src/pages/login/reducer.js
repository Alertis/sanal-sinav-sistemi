import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from './action';

const initialState = {
    user: {},
    loading: false,
    reject: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                loading : true,
            }
        case LOGIN_FULFILLED:
            return {
                ...state,
                user : action.payload,
                loading : false,
            }
        case LOGIN_REJECTED:
            localStorage.removeItem("authorization")
            return {
                ...state,
                loading : false,
                reject: true
            }
        default:
            return state;
    }
}


