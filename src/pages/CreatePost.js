import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { FormInput } from 'react-native-elements'
import navigationOptions from '../util/navigationOptions'

class CreatePost extends Component {
  state = {
    height: 0,
  }
  static navigationOptions = ({ navigation }) => ({
    ...navigationOptions,
    title: '新建task',
  })
  handleContentSizeChange = (evt) => {
    this.setState({
      height: evt.nativeEvent.contentSize.height,
    })
  }
  render() {
    const { height } = this.state // TODO 换行的问题 + 监听回车提交
    return (
      <View style={styles.form}>
        <View style={styles.formItem}>
          <TextInput
            multiline
            // numberOfLines={50}
            placeholder={'标题'}
            selectionColor={'rgb(70,164,251)'} // 光标颜色
            underlineColorAndroid={'transparent'} // 下划线颜色 => just android
            placeholderTextColor={'#bdbdbd'}
            /**
             * onChange / onContentSizeChange => to control contentSize.height
             * onContentSizeChange => just for ios
             * onChange => both
             * https://github.com/facebook/react-native/issues/6552#issuecomment-269989962
             */
            onChange={this.handleContentSizeChange}
            // onChangeText={(text) => {
            //   console.warn(text);
            //   this.setState({ text });
            // }}
            // onContentSizeChange={() => console.log('rest')}
            style={[
              styles.multilineInput,
              {
                height: window.Math.max(26, height)
              }
            ]}
          // value={this.state.text}
          />
        </View>
        <View style={styles.formItem}>
          <TextInput
            multiline
            // numberOfLines={10}
            // textAlignVertical={'top'}
            underlineColorAndroid={"transparent"}
            placeholder={'描述'}
            placeholderTextColor={'#bdbdbd'}
            selectionColor={'rgb(70,164,251)'}
            onChange={this.handleContentSizeChange}
            style={[
              styles.multilineInput,
              {
                borderBottomWidth: 0,
                height: window.Math.max(26, height)
              }
            ]}
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
  multilineInput: {
    borderBottomWidth: 1,
    // borderColor: '#f00',
    borderBottomColor: '#cfcfcf',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 5,
    fontSize: 16,
  },
})

export default CreatePost