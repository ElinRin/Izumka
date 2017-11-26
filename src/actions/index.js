import { browserHistory } from 'react-router';
import { process } from '../processContract';
import {
    GET_START,
    GET_SUCCESS,
    GET_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE,
    SET_ID
} from './actionTypes';

import {
    getDataApi,
    postDataApi
} from '../api';

const postSuccess = (data) => {
   return {
       type: POST_SUCCESS,
       payload: data
   };
};

export const getData = (request) => async dispatch => {
    dispatch({type: GET_START});
    console.log(request);

    try {
        const data = await getDataApi(request);
        dispatch({
            type: GET_SUCCESS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: GET_FAILURE,
            payload: err,
            error: true
        });
    }

};

export const postData = (request) => async dispatch => {
    //dispatch(postSuccess(request)); // FIX ME
    process(request);
    dispatch(browserHistory.push('/complite'));
};
