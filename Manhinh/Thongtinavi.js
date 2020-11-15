import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import AntDesign2 from "react-native-vector-icons/Ionicons";
const DATA = [
  {
    idavi: "Aviary 1",
    diachi: "Tp. Ho Chi Minh"
  },
  {
    idavi: "Aviary 2",
    diachi: "Tp. Ho Chi Minh"
  },
  {
    idavi: "Aviary 3",
    diachi: "Tp. Ho Chi Minh"
  },
  {
    idavi: "Aviary 4",
    diachi: "Tp. Ho Chi Minh"
  },
  {
    idavi: "Aviary 5",
    diachi: "Tp. Ho Chi Minh"
  },
  {
    idavi: "Aviary 6",
    diachi: "Tp. Ho Chi Minh"
  },

]

export default class Thongtinavi extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      idfarm: this.props.navigation.state.params.idfarm
    }
  }
  

  gotoAvi() {
    const { navigation } = this.props;
    var datapass = {
      idfarm: this.state.idfarm
    }
    navigation.navigate("Chitietavi", datapass);
  }


  ThemAvi(){
    const { navigation } = this.props;
    var datapass = {
      idfarm: this.state.idfarm
    }
    navigation.navigate("Themavi", datapass);
  }

  _render2 = ({item}) => {
    return(
      <TouchableOpacity style={styles.row} onPress={()=> this.gotoAvi()}>
        <Text style={styles.txtname}>{item.idavi}</Text>
        <Image style={styles.img} source={require('../image/a2.jpg')}/>
      </TouchableOpacity>


    )
    
  }

  render() {
    console.log(this.state.idfarm);
    return (
      <View style={styles.container}>
        <View style={styles.container3}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Quanlifarm")}>
          <AntDesign2 style={{marginStart: 30}} name="arrow-back-outline" size={35} color="white"/>
          </TouchableOpacity>
          <Text style={styles.txtthem}>Danh sách Aviary</Text>
          <Text>                    </Text>
        </View>
        
        <FlatList
          numColumns={2}
          horizontal={false}
          data={DATA}
          keyExtractor={item => item.idavi}
          renderItem={this._render2}
        />
        <TouchableOpacity style={styles.btnthem} onPress={()=> this.ThemAvi()}>
          <AntDesign2 name="add-outline" size={42} color="white"/>
          <Text style={styles.txtthem}>Thêm Aviary mới</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  container3: {
    height: 50,
    alignItems: 'center',
    backgroundColor: "#5DB075",
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  img: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },

  row: {
    marginVertical: 10,
    height: 120,
    marginVertical: 10,
    marginHorizontal: 20,
    flex: 1,
    alignItems: 'center'
  },

  txtname: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
    marginStart: 15,
  },

  txtthem: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
})