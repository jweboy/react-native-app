import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class Contact extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '联系人',
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
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/images/contact@3x.png')}
        style={{ width: 22, height: 22, tintColor: tintColor }}
      />
    )
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>联系人界面</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})