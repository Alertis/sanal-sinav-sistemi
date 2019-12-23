import axios from 'axios';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

export function loginCheck( username, password ) {

    return dispatch => {
        dispatch({
            type : 'LOGIN',
            payload : axios.post(`${process.env.REACT_APP_API_BASE}/login_check`,
                {username, password}
            )
        })

    }
    
}
