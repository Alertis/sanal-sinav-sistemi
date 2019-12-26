import { combineReducers } from 'redux';
import Login from './pages/login/reducer'
import Questions from './pages/question/reducer'


export default combineReducers({
    Login, Questions
});