import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> Camera </Text>
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