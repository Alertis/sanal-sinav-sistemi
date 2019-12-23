import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';



export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(promise,thunk,logger)
   )
);