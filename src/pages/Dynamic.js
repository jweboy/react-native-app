import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

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
    headerTruncatedBackTitle: '返回',
    headerStyle: {
      backgroundColor: 'rgb(70,164,251)'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 18,
    },
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
