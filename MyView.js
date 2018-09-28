
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class MyView extends Component {
  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  render() {
    const nextRoute = {
      component: MyView,
      title: 'Bar That',
      passProps: { myProp: 'bar' }
    };
    return(
      <TouchableHighlight 
        onPress={() => this._handleNextPress(nextRoute)}
        underlayColor='white'
      >
        <Text style={{marginTop: 200, alignSelf: 'center'}}>
          See you on the other nav {this.props.myProp}!
        </Text>
      </TouchableHighlight>
    );
  }
}

export default MyView;
