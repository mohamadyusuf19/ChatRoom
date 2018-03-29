import {
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_CHANGED,
  FETCH_MESSAGE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  text: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE_CHANGED:
      return { ...state, text: action.payload };
    case SEND_MESSAGE_SUCCESS:
      return { ...state, text: '' };
    case FETCH_MESSAGE_SUCCESS:
      return { ...state, messageList: action.payload };
    default:
      return state;
  }
};
