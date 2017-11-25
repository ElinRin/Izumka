import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from './actionTypes';

import {
    fetchApi
} from '../api';

export const fetch = () => async dispatch => {
    dispatch({type: FETCH_START});

    try {
        const data = await fetchApi();
        dispatch({
            type: FETCH_SUCCESS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: FETCH_FAILURE,
            payload: err,
            error: true
        });
    }

};
