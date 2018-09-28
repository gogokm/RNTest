
import React, { Component } from 'react';
import {
  NavigatorIOS,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import MyView from './MyView';

class NavvyIOS extends Component {
  _handleNavigationRequest() {
    this.refs.nav.push({
      component: MyView,
      title: 'Genius',
      passProps: { myProp: 'genius' },
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: MyView,
          title: 'Foo This',
          passProps: { myProp: 'foo' },
          rightButtonTitle: 'Add',
          onRightButtonPress: () => this._handleNavigationRequest(),
        }}
        style={{flex: 1}}
        barTintColor='#ffffcc'
      />
    );
  }
}

export default NavvyIOS;
