import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import NavigationManager from '../NavigationManager'

export default class Message extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '消息',
    headerStyle: {
      backgroundColor: 'rgb(70,164,251)'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 18
    },
    gesturesEnabled: true,
    headerBackTitleStyle: {
      color: 'white'
    },
    headerLeft: (
      <TouchableOpacity onPress={() => NavigationManager.drawerNavigation.navigate('DrawerOpen')}>
        <View style={styles.main}>
          <Image source={require('../../assets/images/me@3x.png')} style={styles.user} />
        </View>
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <View style={styles.main}>
          <Image source={require('../../assets/images/add@3x.png')} style={styles.add} />
        </View>
      </TouchableOpacity>
    ),
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/images/message@3x.png')}
        style={{ width: 22, height: 22, tintColor: tintColor }}
      />
    )
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>聊天界面点击进入聊天</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  main: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  user: {
    width: 30,
    height: 30,
  },
  add: {
    width: 25,
    height: 25,
  }
})
