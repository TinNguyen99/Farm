import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios';


export default class Dangki extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      sdt: '',
      ten: '',
      matkhau: '',
      diachi: '',
      iduser: '',
      phone_number: '',
    }
  }



  async Dangki () {

    let Time = new Date();
    let mi = Time.getMinutes();
    let sec = Time.getSeconds();
    let day = Time.getDay();
    let mon = Time.getMonth();
    let yer = Time.getFullYear();
    console.log(mi+''+sec+''+day+''+mon+''+yer);
    let t = 'usr'+mi+''+sec+''+day+''+mon+''+yer
    axios.post('http://192.168.5.105/webmedia/ABB/postuser.php',
        'iduser=' + t +
        '&username=' + this.state.ten +
        '&password=' + this.state.matkhau + 
        '&address=' + this.state.diachi + 
        '&phone=' + this.state.sdt
    )
    const { navigation } = this.props;
    navigation.navigate("Dangnhap");
    console.log("OK-BACK");
  } 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Đăng kí người dùng</Text>

        <View style={styles.inputform}>
          <Text style={styles.txt}>Tên Người Dùng</Text>
          <TextInput style={styles.txtinput}
            placeholder="Nguyễn Văn A"
            placeholderTextColor="rgba(30,30,30,0.3)"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={(ten) => this.setState({ten})}/>
        </View>

        <View style={styles.inputform}>
          <Text style={styles.txt}>Số điện thoại</Text>
          <TextInput style={styles.txtinput}
            placeholder="0354031762"
            placeholderTextColor="rgba(30,30,30,0.3)"
            keyboardType="number-pad"
            returnKeyType="next"
            onChangeText={(sdt) => this.setState({sdt})}/>
        </View>

        <View style={styles.inputform}>
          <Text style={styles.txt}>Mật khẩu</Text>
          <TextInput style={styles.txtinput}
            placeholderTextColor="rgba(30,30,30,0.3)"
            keyboardType="default"
            returnKeyType="next"
            secureTextEntry={true}
            onChangeText={(matkhau) => this.setState({matkhau})}/>
        </View>

        <View style={styles.inputform}>
          <Text style={styles.txt}>Địa chỉ</Text>
          <TextInput style={styles.txtinput}
            placeholder="TP. Ho Chi Minh"
            placeholderTextColor="rgba(30,30,30,0.3)"
            keyboardType="default"
            returnKeyType="done"
            onChangeText={(diachi) => this.setState({diachi})}/>
        </View>




        <TouchableOpacity style={styles.btndk} onPress={() => this.Dangki()}>
          <Text style={styles.txtdk}>Đăng kí</Text>
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
      fontWeight: 'bold',
      fontSize: 30,
      color: '#5DB075',
      alignSelf: 'center',
      marginTop: 7
    },

    inputform: {
      width: 330,
      alignSelf: 'center',
      marginTop: 20,
    },

    txt: {
      fontStyle: 'italic',
      color: 'gray',
      alignSelf: 'flex-start',
      marginBottom: 3,
    },

    txtinput: {
      borderColor: '#5DB075',
      borderWidth: 2,
      borderRadius: 12,
      height: 60,
      paddingStart: 20,
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
