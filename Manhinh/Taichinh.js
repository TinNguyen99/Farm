import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Taichinh extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> Danh sách Tài chính </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txt: {
    alignSelf: 'center',
    color: "#5DB075",
    fontWeight: 'bold',
    fontSize: 25,
  }
})