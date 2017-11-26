import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import userPage from './userPage';
import message from './message';
import info from './info';

export default combineReducers({
    routing: routerReducer,
        userPage,
        message,
        info
});