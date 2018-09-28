/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';
import NavvyIOS from './NavvyIOS';

export default class rntest extends Component {

  render() {
    return (
      <NavvyIOS />
    );
  }
}

AppRegistry.registerComponent('rntest', () => rntest);
