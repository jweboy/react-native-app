import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import ActionButton from 'react-native-action-button'
// import Icon from 'react-native-vector-icons' //TODO 文件目录在iOS和android需要配置
import { Icon } from 'react-native-elements'
import NavigationManager from '../NavigationManager'
import navigationOptions from '../util/navigationOptions'

const ActionButtonItem = ActionButton.Item

export default class Message extends Component {
  static navigationOptions = ({ navigation }) => ({
    ...navigationOptions,
    title: '消息',
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
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>聊天界面点击进入聊天</Text>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButtonItem
            buttonColor={'#00aced'}
            title={'New Task'}
            onPress={() => navigation.navigate('CreatePost')}
          >
            <Icon
              name={'pencil'}
              type={'font-awesome'}
              iconStyle={styles.actionButtonIcon}
            />
          </ActionButtonItem>
          <ActionButtonItem
            buttonColor={'#1abc9c'}
            title={'All Tasks'}
            onPress={() => console.log("notes tapped!")}
          >
            <Icon
              name={'check'}
              type={'font-awesome'}
              iconStyle={styles.actionButtonIcon}
            />
          </ActionButtonItem>
        </ActionButton>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    color: '#fff'
  }
})
