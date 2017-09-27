import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, NativeModules, Alert } from "react-native"
import NavigationManager from '../NavigationManager'

import UShare from '../share/share'
import SharePlatform from '../share/SharePlatform'

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
  _share() {
    Alert.alert(NativeModules)
    UShare.share('标题', '内容',
      'http://baidu.com', 'http://dev.umeng.com/images/tab2_1.png', SharePlatform.QQ,
      (message) => {
        alert(message)
        // message:
        // 分享成功
        // 分享失败
        // 取消分享
        // ToastAndroid.show(message,ToastAndroid.SHORT);

      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => {
          Alert.alert(NativeModules)
          // NativeModules.sharemodule.share('标题', '内容', 'http://baidu.com', 'http://dev.umeng.com/images/tab2_1.png', 2,
          //   (message) => {
          //     // message:
          //     // 分享成功
          //     // 分享失败
          //     // 取消分享
          //     Alert.alert(message);

          //   })
        }}>聊天界面点击进入聊天</Text>
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
