import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import imagePicker from 'react-native-image-picker'
// import PropTypes from 'prop-types'

export default class PersonCenter extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  state = {
    avatarSource: null
  }
  static navigationOptions = ({ navigation }) => ({
    title: '个人中心',
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
  show() {
    const photoOption = {
      //底部弹出框选项
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '图片库',
      cameraType: 'back',
      mediaType: 'photo',
      videoQuality: 'high',
      durationLimit: 10,
      quality: 0.75,
      allowsEditing: true,
      maxWidth: 600,
      maxHeight: 600,
      aspectX: 2,
      aspectY: 1,
      angle: 0,
      noData: false,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    imagePicker.showImagePicker(photoOption, (res) => {
      if (res.didCancel) {
        return console.warn('操作被中途取消');
      } else if (res.error) {
        return console.error('ImagePicker Error:', res.error);
      } else if (res.customButton) {
        return console.warn('自定义按钮被点击:', res.customButton);
      } else {
        const { uri } = res
        this.setState({
          avatarSource: { uri },
        })
      }
    })
  }
  render() {
    const { avatarSource } = this.state

    return (
      <View>
        <Text onPress={this.show.bind(this)}>选取图片</Text>
        <View style={styles.header}>
          <Image
            source={avatarSource || require('../../assets/images/contact@3x.png')}
            style={styles.avatar}
          />
          <Text>图片地址:{avatarSource && avatarSource.uri}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
  },
  avatar: {
    width: 80,
    height: 80,
  }
})
