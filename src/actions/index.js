import { browserHistory } from 'react-router';
import { processRequest, getInfo } from '../processContract';
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

const getStart = (userId) => {
    return {
        type: GET_START,
        payload: userId
    };
};

export const getData = (request) => async dispatch => {
    //dispatch(getStart(request));
    console.log(request);
    getInfo(request);
    // try {
    //     const data = await getDataApi(request);
    //     dispatch({
    //         type: GET_SUCCESS,
    //         payload: data
    //     });
    // } catch (err) {
    //     dispatch({
    //         type: GET_FAILURE,
    //         payload: err,
    //         error: true
    //     });
    //}

};

export const postData = (request, link) => async dispatch => {
    //dispatch(postSuccess(request)); // FIX ME
    processRequest(request);
    dispatch(browserHistory.push(link));
};