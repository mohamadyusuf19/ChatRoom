import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB7bFDemWqePphP5gk6HZgmuWVwns-3M6o",
      authDomain: "chatroom-6515c.firebaseapp.com",
      databaseURL: "https://chatroom-6515c.firebaseio.com",
      projectId: "chatroom-6515c",
      storageBucket: "chatroom-6515c.appspot.com",
      messagingSenderId: "770767861420"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
