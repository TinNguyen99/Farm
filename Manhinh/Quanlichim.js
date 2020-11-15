import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import AntDesign2 from "react-native-vector-icons/Ionicons";

const Data = [
  {
    id: 1,
    gioitinh: 'Đực',
    tuoi: '1',
    nguongen: 'HCM',
    giaban: "500 USD"
  },
  {
    id: 2,
    gioitinh: 'Cái',
    tuoi: '1',
    nguongen: 'HCM',
    giaban: "500 USD"
  },
  {
    id: 3,
    gioitinh: 'Cái',
    tuoi: '2',
    nguongen: 'Ninh Thuận',
    giaban: "600 USD"
  },
  {
    id: 4,
    gioitinh: 'Đực',
    tuoi: '2',
    nguongen: 'Ninh Thuận',
    giaban: "600 USD"
  },
]

export default class Quanlichim extends Component {

  _render = ({item}) => {
    return(
      <View style={styles.item}>
        <Image style={styles.img} source={require('../image/a2.jpg')}/>
        <View>
          <Text style={styles.txt1}>Giới tính: {item.gioitinh}</Text>
          <Text style={styles.txt1}>Tuổi: {item.tuoi}</Text>
          <Text style={styles.txt1}>Nguồn Gen: {item.nguongen}</Text>
          <Text style={styles.txt1}>Giá bán: {item.giaban}</Text>
      </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt0}> Danh sách chim </Text>

        <FlatList 
        keyExtractor={item => item.id}
          data={Data}
          renderItem={this._render}
        />

        <TouchableOpacity style={styles.btnthem} onPress={()=> this.props.navigation.navigate('Themchimmoi')}>
          <AntDesign2 name="add-outline" size={42} color="white"/>
          <Text style={styles.txt}>Thêm Chim mới</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txt0: {
    alignSelf: 'center',
    color: "#5DB075",
    fontWeight: 'bold',
    fontSize: 25,
  },

  item: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#5DB075",
    marginVertical: 10,
    marginHorizontal: 10
  },

  img: {
    borderRadius: 10,
    width: 120,
    height: 100,
    marginEnd: 25,
  },

  txt1: {
    fontSize: 17,
    fontWeight: "700",
    color: 'gray'
  },

  btnthem: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 330,
    height: 60,
    backgroundColor: '#5DB075',
    color: 'white',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 40,

  },
  txt: {
    marginStart: 10,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  }
})
