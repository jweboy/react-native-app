/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import HomePage from './src/pages'

export default class MyReactNativeApp extends Component {
  componentDidMount = () => {
    SplashScreen.hide()
  }
  render() {
    return (
      <HomePage />
    );
  }
}

AppRegistry.registerComponent('myReactNativeApp', () => MyReactNativeApp);
