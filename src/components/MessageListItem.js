import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { mail, text } = this.props.message;

    return (
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>
            {mail} : {text}
          </Text>          
        </CardSection>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
