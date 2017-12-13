import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import DrawerLeft from '../common/DrawerLeft'
import DrawerHome from '../common/DrawerHome'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const CustomerContentComponent = (props) => (
  <DrawerLeft {...props}></DrawerLeft>
)

const drawerNavigatorScreen = {
  Home: {
    screen: DrawerHome,
  }
}

const drawerNavigatorConfig = {
  drawerPosition: 'left',
  drawerWidth: Dimensions.get('window').width - 80,
  contentComponent: (CustomerContentComponent)
}

const Drawer = DrawerNavigator(drawerNavigatorScreen, drawerNavigatorConfig)

export default Drawer

