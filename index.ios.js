/**
 * @my React Native App
 * @https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomePage from './src/pages/HomePage';

export default class MyReactNativeApp extends Component {
  render() {
    return (
      <HomePage />
    );
  }
}

AppRegistry.registerComponent('myReactNativeApp', () => MyReactNativeApp)

