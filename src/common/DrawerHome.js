import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'
import NavigationManager from '../NavigationManager'
import Message from '../pages/Message'
import Contact from '../pages/Contact'
import Dynamic from '../pages/Dynamic'
import MyCenter from '../pages/MyCenter'

const tabNavigatorScreen = {
  Message: {
    screen: Message,
  },
  Contact: {
    screen: Contact,
  },
  Dynamic: {
    screen: Dynamic,
  },
  MyCenter: {
    screen: MyCenter,
  }
}

const tabNavigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  initialRouteName: 'Message',
  backBehavior: 'none',
  tabBarOptions: {
    activeTintColor: 'rgb(78,187,251)',
    activeBackgroundColor: 'white',
    inactiveTintColor: 'rgb(127,131,146)',
    inactiveBackgroundColor: 'white',
    labelStyle: {
      fontSize: 12
    }
  }
}

const Tab = TabNavigator(tabNavigatorScreen, tabNavigatorConfig)

const stackNavigatorScreen = {
  Tab: {
    screen: Tab,
  }
}
const stackNavigatorConfig = {
  mode: 'card',
  headerMode: 'float',
  transitionConfig: (() => ({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  }))
}
const Nav = StackNavigator(stackNavigatorScreen, stackNavigatorConfig)

export default class DrawerHome extends Component {
  componentDidMount = () => {
    NavigationManager.drawerNavigation = this.props.navigation
  }

  render() {
    return (
      <Nav />
    )
  }
}