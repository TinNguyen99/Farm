import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios';

export default class TaoFarm extends Component {

  constructor(props){
    super(props);
    this.state = {
      tenfarm: '',
      diachi: '',
      iduser: this.props.navigation.state.params.iduser,
    }
  }

  KhoiTaoFarm = () => {
    var { navigation } = this.props;
    let a = this.state.iduser;
    let ifarm = 'farm' + a.slice(4);
    axios.post("http://192.168.5.105/webmedia/ABB/themfarm.php/", 
    'idfarm=' + ifarm +
    '&farmname=' + this.state.tenfarm +
    '&farmaddress=' + this.state.diachi +
    '&iduser=' + this.state.iduser
  )
  .then(function (response) {
    console.log("Them thanh cong!");

  })
  .catch(function (error) {
    console.log(error);
    console.log("LOI LOI LOI....");
  });

  navigation.navigate("Quanlifarm");
  }

  render() {
    console.log(this.state.iduser);
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Thông Tin Farm Mới</Text>

        <View style={styles.inputform}>
          <Text style={styles.txt}>Tên Farm</Text>
          <TextInput style={styles.txtinput}
            placeholder="Farm123"
            placeholderTextColor="rgba(30,30,30,0.3)"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={(tenfarm) => this.setState({tenfarm})}/>
        </View>

        <View style={styles.inputform}>
          <Text style={styles.txt}>Địa chỉ</Text>
          <TextInput style={styles.txtinput}
            placeholderTextColor="rgba(30,30,30,0.3)"
            keyboardType="default"
            placeholder="TP. Ho Chi Minh"
            returnKeyType="next"
            secureTextEntry={true}
            onChangeText={(diachi) => this.setState({diachi})}/>
        </View>

      
        <TouchableOpacity style={styles.btndk} onPress={()=> this.KhoiTaoFarm()}>
          <Text style={styles.txtdk}>Tạo mới</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },

    txtTitle: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#5DB075',
      alignSelf: 'center',
      marginBottom: 30,
      marginTop: 25
    },

    inputform: {
      width: 330,
      alignSelf: 'center',
      marginTop: 20,
    },

    txt: {
      fontStyle: 'italic',
      color: '#5DB075',
      alignSelf: 'flex-start',
      marginBottom: 3,
    },

    txtinput: {
      borderColor: '#5DB075',
      borderWidth: 2,
      borderRadius: 12,
      height: 60,
      paddingStart: 25
    },

    btndk: {
      alignSelf: 'center',
      marginTop: 30,
      alignItems: 'center',
      alignContent: 'center',
      width: 330,
      height: 60,
      backgroundColor: '#5DB075',
      borderRadius: 12
    },

    txtdk: {
      fontSize: 27,
      fontWeight: 'bold',
      color: 'white',
      marginTop:10,
      alignSelf: 'center'
    },
})

