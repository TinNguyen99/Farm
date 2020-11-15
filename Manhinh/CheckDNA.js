import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class CheckDNA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> Cập nhật lên bản PRO để sử dụng chức năng </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    textAlign: 'center',
    color: "#5DB075",
    fontWeight: 'bold',
    fontSize: 35,
  }
})