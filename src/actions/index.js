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

export const getData = () => async dispatch => {
    dispatch({type: GET_START});

    try {
        const data = await getDataApi();
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

export const postData = (data) => async dispatch => {
    dispatch({type: POST_START});
    console.log(data);

    try {
        const answer = await postDataApi();
        dispatch({
            type: POST_SUCCESS,
            payload: answer
        });
    } catch (err) {
        dispatch({
            type: POST_FAILURE,
            payload: err,
            error: true
        });
    }

};
