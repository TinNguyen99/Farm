import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

import AntDesign2 from "react-native-vector-icons/Ionicons";

const DATA = [
  {
    tenfarm: "Farm 1",
    diachi: "Tp. Ho Chi Minh",
    idfarm: 'farm123'
  },
  {
    tenfarm: "Farm 2",
    diachi: "Tp. Ho Chi Minh",
    idfarm: 'farm123'
  },
  {
    tenfarm: "Farm 3",
    diachi: "Tp. Ho Chi Minh"
  },
  {
    tenfarm: "Farm 4",
    diachi: "Tp. Ho Chi Minh"
  },
  {
    tenfarm: "Farm 5",
    diachi: "Tp. Ho Chi Minh"
  },
  {
    tenfarm: "Farm 6",
    diachi: "Tp. Ho Chi Minh"
  },

]

export default class Quanlifarm extends Component {

  constructor(props){
    super(props);
    this.state = {
      iduser: this.props.navigation.state.params.iduser
    }
  }

  gotoAvi (idfarm) {
    var send = {
      idfarm: idfarm,
    }
    const { navigation } = this.props;
    navigation.navigate("Thongtinavi", send);
  }

  Taofarm() {
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("Themfarm", datapass);
  }

  _render = ({item}) => {
    return(
      <View style={styles.row}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.txtname}>{item.tenfarm}</Text>
          <Text style={styles.txtdiachi}>{item.diachi}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}>
          <TouchableOpacity onPress={()=> this.gotoAvi(item.idfarm)}>
            <Text style={styles.txtname2}>Aviary</Text>
          </TouchableOpacity>
          <Text style={styles.txtname2}>Vật tư</Text>
          <Text style={styles.txtname2}>Thức ăn</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.Lheader}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
            <AntDesign2 style={{marginStart: 30}} name="arrow-back-outline" size={30} color="white"/>
          </TouchableOpacity>
            <Text style={styles.title}>Chủ Farm: TinNguyen99</Text>
            <Text style={styles.title}>Điện thoại: 0354031762</Text>
          </View>
          <View style={styles.Rheader}>
            <Image style={styles.img} source={require('../image/a3.png')}/>
          </View>
        </View>

        

        <FlatList
          keyExtractor={item => item.tenfarm}
          data={DATA}
          renderItem={this._render}
        />

        <TouchableOpacity style={styles.btnthem} onPress={()=> this.Taofarm()}>
          <AntDesign2 name="add-outline" size={42} color="white"/>
          <Text style={styles.txt}>Thêm Farm mới</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  header: {
    backgroundColor: "#5DB075",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    marginBottom: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },

  Lheader: {
    flex: 1,

  },

  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    marginStart: 20,
    marginVertical: 10,
  },

  img: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'white',
    width: 120, 
    height: 110,
    borderRadius: 100,
    marginEnd: 20
  },

  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 85,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDDD'
  },

  txtname: {
    fontSize: 20,
    color: '#5DB075',
    fontWeight: 'bold',
    marginStart: 15,
    marginTop: 7
  },

  txtname2: {
    
    fontSize: 18,
    color: '#42bcd7',
    fontWeight: 'bold',
    marginStart: 15,
    marginTop: 7
  },

  txtdiachi: {
    fontSize: 14,
    marginStart: 25,
    marginTop: 5,
    color: 'gray',
    fontWeight: 'bold'
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
