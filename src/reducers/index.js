import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import userPage from './userPage';
import message from './message';

export default combineReducers({
    routing: routerReducer,
        userPage,
        message
});