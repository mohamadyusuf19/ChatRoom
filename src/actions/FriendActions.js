import firebase from 'firebase';
import {
  FETCH_FRIEND_LIST
} from './types';

export const friendFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/user/${currentUser.uid}/friends`)
      .on('value', snapshot => {
        dispatch({
          type: FETCH_FRIEND_LIST,
          payload: snapshot.val()
        });
      });
  };
};
