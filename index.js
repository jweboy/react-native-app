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
// import Expo from 'expo'
import SplashScreen from 'react-native-splash-screen'
import HomePage from './src/pages/HomePage'

export default class myReactNativeApp extends Component {
  componentDidMount = () => {
    SplashScreen.hide()
  }

  render() {
    return (
      <HomePage />
    );
  }
}

AppRegistry.registerComponent('myReactNativeApp', () => myReactNativeApp);
// Expo.registerRootComponent(myReactNativeApp)
