import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import DrawerLeft from './DrawerLeft'
import DrawerHome from './DrawerHome'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const CustomerContentComponent = (props) => (
  <DrawerLeft {...props}></DrawerLeft>
)

const Drawer = DrawerNavigator(
  {
    Home: {
      screen: DrawerHome,
    }
  }, {
    drawerPosition: 'left',
    drawerWidth: Dimensions.get('window').width - 80,
    contentComponent: (CustomerContentComponent)
  }
)

export default class HomePage extends Component {
  render() {
    return (
      <Drawer />
    )
  }
}
