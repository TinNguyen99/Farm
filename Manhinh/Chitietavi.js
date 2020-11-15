import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign2 from "react-native-vector-icons/Ionicons";
export default class Chitietavi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container3}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Thongtinavi")}>
            <AntDesign2 style={{marginStart: 30}} name="arrow-back-outline" size={35} color="white"/>
          </TouchableOpacity>
          <Text style={styles.txt3}>Thông tin Aviary</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Camera")}>
            <AntDesign2 style={{marginEnd: 30}} name="videocam-outline" size={35} color="white"/>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <Text style={styles.txt1}>Thông tin chim trống</Text>
          <View style={styles.group}>
            <View>
              <Text style={styles.txt}>Ngày sinh: </Text>
              <Text style={styles.txt}>Ngày vào Aviary</Text>
              <Text style={styles.txt}>Nguồn gen</Text>
            </View>
            <Image style={styles.img} source={require('../image/a4.png')}/>
          </View>
        </View>
        

        <View style={styles.container2}>
          <Text style={styles.txt1}>Thông tin chim mái</Text>
          <View style={styles.group}>
            <View>
              <Text style={styles.txt}>Ngày sinh: </Text>
              <Text style={styles.txt}>Ngày vào Aviary</Text>
              <Text style={styles.txt}>Nguồn gen</Text>
            </View>
            <Image style={styles.img} source={require('../image/a4.png')}/>
          </View>
        </View>

        <View style={styles.group}>
          <Text style={styles.txt2}>Nhiệt Độ</Text>
          <Text style={styles.txt2}>Độ ẩm</Text>
          <Text style={styles.txt2}>Nước/thức ăn</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  container2: {
    marginVertical: 20,

  },

  container3: {
    height: 50,
    alignItems: 'center',
    backgroundColor: "#5DB075",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txt3:{
    fontWeight: 'bold',
    color:'white',
    fontSize: 23
  },

  group: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 7,
    marginHorizontal: 15,
    padding: 10,
    borderColor: '#5DB075',
    borderWidth: 2,
    borderRadius: 10,
  },

  txt1: {
    fontWeight: 'bold',
    marginStart: 25,
    fontSize: 20,
    color: '#5DB075',
  },

  txt: {
    fontWeight: '700',
    color: 'gray',
    marginVertical: 3,
    fontSize: 16
  },

  txt2: {
    fontSize: 18,
    color: "#5DB075",
    fontWeight: 'bold'
  },

  img: {
    width: 130,
    height: 100,
    borderRadius: 10,
    
  },
});
