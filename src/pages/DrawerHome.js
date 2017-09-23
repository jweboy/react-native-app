import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'
import NavigationManager from '../NavigationManager'
import Message from './Message'
import Contact from './Contact'
import Dynamic from './Dynamic'

const Tab = TabNavigator(
  {
    Message: {
      screen: Message,
    },
    Contact: {
      screen: Contact,
    },
    Dynamic: {
      screen: Dynamic,
    },
  }, {
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
)

const Nav = StackNavigator(
  {
    Tab: {
      screen: Tab,
    }
  }, {
    mode: 'card',
    headerMode: 'float',
    transitionConfig: (() => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }))
  }
)

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
