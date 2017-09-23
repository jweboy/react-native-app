import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DrawerLeft extends Component {
  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigate('DrawerClose')}
        >
          <Text>侧滑页点击关闭</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DrawerLeft
