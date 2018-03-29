import {
  ADD_FRIEND_LOADING,
  ADD_EMAIL_CHANGED,
  ADD_FRIEND_SUCCRSS,
  ADD_FRIEND_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case ADD_FRIEND_SUCCRSS:
      return { INITIAL_STATE };
    case ADD_FRIEND_FAIL:
      return { ...state, error: 'Email Error.', loading: false };
    case ADD_FRIEND_LOADING:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
