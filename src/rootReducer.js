import { combineReducers } from 'redux';
import Login from './pages/login/reducer'
import Questions from './pages/question/reducer'
import Exam from './pages/exam/reducer'



export default combineReducers({
    Login, Questions, Exam
});