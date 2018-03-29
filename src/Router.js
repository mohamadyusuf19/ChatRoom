import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Chatroom from './components/Chatroom';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.addFriend()}
            rightTitle="Add Friend"
            key="friendList"
            component={FriendList}
            title="Friend List"
          />
          <Scene key="addFriend" component={AddFriend} title="Add Friend" />
          <Scene key="chatroom" component={Chatroom} title="Chatroom" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
