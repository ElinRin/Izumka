import { SET_ID } from '../actions/actionTypes';

const initialState = {
  id: null,
  login: null,
  password: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_ID:
      return payload;
    default:
      return state;
  }
};