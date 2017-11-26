import { GET_SUCCESS } from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_SUCCESS:
      return payload;
    default:
      return state;
  }
};
