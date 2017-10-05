import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import { List, ListItem, SearchBar } from 'react-native-elements'
import navigationOptions from '../util/navigationOptions'

export default class Contact extends Component {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false,
  }
  static navigationOptions = ({ navigation }) => ({
    title: '联系人',
    ...navigationOptions,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/images/contact@3x.png')}
        style={{ width: 22, height: 22, tintColor: tintColor }}
      />
    )
  })
  componentDidMount = () => {
    this.getRemoteRequest()
  }
  getRemoteRequest = () => {
    const { page, seed } = this.state
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`
    this.setState({ loading: true })

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        })
      })
      .catch(error => {
        this.setState({
          error,
          loading: false,
          refreshing: false,
        })
      })
  }
  renderHeader = () => (
    <SearchBar placeholder={'Type here ...'} round />
  )
  renderFooter = () => {
    // if (!this.state.loading) return null

    return (
      <View style={{
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#CED0CE',
      }}>
        <ActivityIndicator animating size={'large'} />
      </View>
    )
  }
  renderItem = ({ item }) => (
    <ListItem
      roundAvatar
      title={`${item.name.first},${item.name.last}`}
      subtitle={item.email}
      avatar={{ uri: item.picture.thumbnail }}
      containerStyle={{ borderBottomWidth: 0 }}
    />
  )
  renderDefault = () => (
    <View>
      <Text>联系人界面</Text>
    </View>
  )
  renderSeparator = () => (
    <View
      style={{
        height: 1,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '14%'
      }}
    />
  )
  handleRefresh = () => {
    this.setState({
      page: 1,
      refreshing: true,
      seed: this.state.seed + 1,
    }, () => {
      this.getRemoteRequest()
    })
  }
  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
    }, () => {
      this.getRemoteRequest()
    })
  }
  getKeyExtractor = ({ email }) => email
  render() {
    const { data, refreshing } = this.state
    return (
      <View>
        <FlatList
          style={{ margin: 0 }}
          data={data}
          extraData={this.state}
          renderItem={this.renderItem}
          removeClippedSubviews={false}
          refreshing={refreshing}
          keyExtractor={this.getKeyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          // ListEmptyComponent={this.renderDefault}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
          initialNumToRender={5}
        />
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