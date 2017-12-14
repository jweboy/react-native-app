import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import navigationOptions from '../util/navigationOptions'

// TODO 验证 两个input为空的时候无法点击按钮 不触发事件
// TODO 键盘谈起的时候 textarea部分被遮挡住了 需要自动上滑上面的部分 参考 https://github.com/rccoder/blog/issues/25 与文档 textInput 部分

class CreatePost extends Component {
  state = {
    height: 0,
    title: null,
    desc: null,
  }
  static navigationOptions = ({ navigation }) => ({
    ...navigationOptions,
    title: '新建task',
  })
  // handleContentSizeChange = (evt) => {
  //   console.log(evt.nativeEvent.contentSize)
  //   this.setState({
  //     height: evt.nativeEvent.contentSize.height,
  //   })
  // }
  submitEditing = () => {
    this.refs.description.focus(); // focus next input
  }
  changeText = (type) => (text) => {
    this.setState({ [type]: text })
  }
  submitForm = () => {
    const { title, desc } = this.state
    console.log(title, desc)
    Alert.alert(title, desc)
  }
  render() {
    // const { height } = this.state
    return (
      <View style={styles.form}>
        <View style={styles.formItem}>
          <TextInput
            ref={'title'}
            autoCorrect={false}
            placeholder={'标题'}
            selectionColor={'rgb(70,164,251)'} // 光标颜色
            underlineColorAndroid={'transparent'} // 下划线颜色 => just android
            placeholderTextColor={'#bdbdbd'}
            /**
             * 键盘属性 multiline为true时无效
             * returnKeyType => 回车“确定”按钮的类型
             * returnKeyLabel => 回车“确定”按钮的自定义文本
             */
            returnKeyType={'next'}
            // returnKeyLabel={'下一项'}
            /**
             * onChange / onContentSizeChange => to control contentSize.height
             * onContentSizeChange => just for ios
             * onChange => both
             * https://github.com/facebook/react-native/issues/6552#issuecomment-269989962
             */
            // onChange={this.handleContentSizeChange}
            onSubmitEditing={this.submitEditing}
            onChangeText={this.changeText('title')}
            style={styles.input}
          />
        </View>
        <View style={styles.formItem}>
          <TextInput
            ref={'description'}
            multiline
            numberOfLines={1000}
            textAlignVertical={'top'}
            underlineColorAndroid={"transparent"}
            placeholder={'描述'}
            placeholderTextColor={'#bdbdbd'}
            selectionColor={'rgb(70,164,251)'}
            // onChange={this.handleContentSizeChange}
            onChangeText={this.changeText('desc')}
            style={[
              styles.input,
              {
                borderBottomWidth: 0,
                // height: window.Math.max(26, height)
              }
            ]}
          />
        </View>
        <View style={styles.fixed}>
          <Button
            buttonStyle={styles.btn}
            icon={{
              name: 'send',
              type: 'font-awesome',
              color: 'rgb(70,164,251)',
              size: 20
            }}
            onPress={this.submitForm}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    // height: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  formItem: {
    padding: 10
  },
  input: {
    height: 35,
    // borderWidth: 1,
    borderBottomWidth: 1,
    // borderColor: '#f00',
    borderBottomColor: '#eee',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 5,
    fontSize: 16,
  },
  fixed: {
    borderTopWidth: 1,
    borderTopColor: '#cfcfcf',
    backgroundColor: '#eee',
    padding: 5,
    position: 'absolute',
    bottom: 0,
    left: 'auto',
    right: 'auto',
    width: '100%',
    flexDirection: 'row-reverse',
    // justifyContent: 'space-between'
  },
  btn: {
    width: 60,
    backgroundColor: 'transparent'
  },
})

export default CreatePost