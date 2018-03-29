import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddFriendReducer from './AddFriendReducer';
import FriendReducer from './FriendReducer';
import MessageReducer from './MessageReducer';

export default combineReducers({
  auth: AuthReducer,
  addfriend: AddFriendReducer,
  friend: FriendReducer,
  message: MessageReducer
});
