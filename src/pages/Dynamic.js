import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import navigationOptions from '../util/navigationOptions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default class Dynamic extends Component {
  static navigationOptions = ({
    title: '动态',
    ...navigationOptions,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/images/star@3x.png')}
        style={{ width: 22, height: 22, tintColor: tintColor }}
      />
    )
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>动态界面</Text>
      </View>
    )
  }
}
