import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { friendFetch } from '../actions';
import ListItem from './ListItem';

class FriendList extends Component {
  componentWillMount() {
    this.props.friendFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {  //props updated
    this.createDataSource(nextProps);
  }

  createDataSource({ friends }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(friends);
  }

  renderRow(friend) {
    return <ListItem friend={friend} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const friends = _.map(state.friend, (val, uid) => {
    return { ...val, uid };
  });

  return { friends };
};

export default connect(mapStateToProps, { friendFetch })(FriendList);
