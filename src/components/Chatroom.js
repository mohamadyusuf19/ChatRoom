import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import GiftedChat from 'react-native-gifted-chat';
import { sendMessage, messageChanged, messageFetch } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import MessageListItem from './MessageListItem';


class Chatroom extends Component {
  componentWillMount() {
    const { friend } = this.props;

    this.props.messageFetch(friend);
    // this.createDataSource(this.props);
  }

  // componentWillReceiveProps(nextProps) {  //props updated
  //   this.createDataSource(nextProps);
  // }

  onMessageChange(text) {
    this.props.messageChanged(text);
  }

  onButtonPress() {
    const { friend, text } = this.props;

    this.props.sendMessage(text, friend);
  }

  // createDataSource({ messages }) {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });

  //   this.dataSource = ds.cloneWithRows(messages);
  // }

  // renderRow(message) {
  //   return <MessageListItem message={message} />;
  // }

  render() {
    return (   
      <GiftedChat 
        onInputTextChanged={this.onMessageChange.bind(this)}
      />        
    );
  }
}

const mapStateToProps = state => {
  const { text } = state.message;
  const messages = _.map(state.message.messageList, (val, uid) => {
    return { ...val, uid };
  });
  console.log('messageList', messages);

  return { text, messages };
};

export default connect(mapStateToProps, {
  sendMessage,
  messageChanged,
  messageFetch
})(Chatroom);
