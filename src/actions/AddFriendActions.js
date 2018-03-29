import _ from 'lodash';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ADD_FRIEND_LOADING,
  ADD_EMAIL_CHANGED,
  ADD_FRIEND_SUCCRSS,
  ADD_FRIEND_FAIL
} from './types';

export const addFriend = ({ email }) => {
  return (dispatch) => {
    let addFriendFlag = false;

    dispatch({ type: ADD_FRIEND_LOADING });

    firebase.database().ref(`/users/mail`)
      .on('value', snapshot => {
        const value = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid };
        });

        value.forEach((v) => {
          console.log('value:', v);
          if (email === v.email) {
            addFriendFlag = true;
            addFriendSuccess(dispatch, firebase.auth().currentUser, v);
          }
        });

        if (addFriendFlag === false) {
          dispatch({ type: ADD_FRIEND_FAIL });
        }
      });
  };
};

export const addEmailChanged = (text) => {
  return {
    type: ADD_EMAIL_CHANGED,
    payload: text
  };
};

const addFriendSuccess = (dispatch, user, friend) => {
  console.log('user:', user.uid);
  console.log('friend:', friend);
  const chatroomId = Math.floor(rendomId(1, 1000000));

  firebase.database().ref(`user/${user.uid}/friends`)
  .push({ id: friend.email, uid: friend.userid, chatroomId })
  .then(() => {
    firebase.database().ref(`user/${friend.userid}/friends`)
      .push({ id: user.email, uid: user.uid, chatroomId })
      .then(() => {
        dispatch({ type: ADD_FRIEND_SUCCRSS });
        Actions.main({ type: 'reset' });
      });
  });
};

const rendomId = (min, max) => {
  return (Math.random() * (max - min)) + min;
};
