import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Image} from 'react-native'
import axios from 'axios';
// import { getUserProfile } from 'react-native-zalo-kit'
// import { login, Constants } from 'react-native-zalo-kit'
// import { getApplicationHashKey } from 'react-native-zalo-kit'
// import { isAuthenticated } from 'react-native-zalo-kit'
import ZaloKit from 'react-native-zalo-kit';
const login = async () => {
  try {
    const oauthCode = await login(Constants.AUTH_VIA_APP_OR_WEB)
    console.log(oauthCode)

    /*
      returns: 'some oauthCode'
    */
  } catch (error) {
    console.log(error)
  }
}
export default class Dangnhap extends Component {

  constructor(props){
    super(props);
    this.state = {
        sdt: '',
        matkhau: '',
        arruser: [],

    }
  } 
  login = async () => {
    try {
      await ZaloKit.login(ZaloKit.Constants.AUTH_VIA_APP)

    } catch (error) {
      console.log(error)

    
    }
  }
  getUserProfile = async () => {
    console.log("userProfile");
    try {
      const userProfile = await ZaloKit.getUserProfile()
      console.log(userProfile)
      this.setState({ userProfile })
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount(){
    const url = 'http://192.168.5.105/webmedia/ABB/getuser.php';
    axios.get(url)
    .then(response => {
      console.log(response.data);
      this.setState({
        arruser: response.data
      })
      console.log(this.state.arruser);
    })
    .catch(error => {
      console.log(error);
    })
  }

  DNhap = () => {
    if(this.state.sdt == '' || this.state.matkhau == ''){
      Alert.alert("Vui lòng kiểm tra lại!");
    } else {

    console.log("OK");const { navigation } = this.props;
    const datapass = {
      ten: 'TinNguyen99',
      iduser: 'user123'
    }
    navigation.navigate("Home", datapass);
    for (x of this.state.arruser){
      if(x[0].username == this.state.sdt && x[0].password == this.state.matkhau){
        const { navigation } = this.props;
        navigation.navigate("Home");
      }
    }
          
  }
    console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
  }


  
  
  Dangki = () => {
    const { navigation } = this.props;
    console.log("TNNNNNNNNNNNNNNNNNNNNNN");
    navigation.navigate("Dangki");
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Image style={styles.img1} source={require('../image/logo.png')}/>

        <View style={styles.inputform}>
          <Text style={styles.txtform}>Số điện thoại</Text>
          <View style={styles.row}>
            <Image style={styles.img} source={require('../image/phone2.png')}/>
            <TextInput style={styles.txtinput}
              placeholder="0354031762"
              placeholderTextColor="rgba(30,30,30,0.2)"
              keyboardType='phone-pad'
              returnKeyType="next"
              maxLength={10}
              onChangeText={(sdt) => this.setState({sdt})}/>
          </View>
          
        </View>
        
        <View style={styles.inputform}>
          <Text style={styles.txtform}>Mật khẩu</Text>
          <View style={styles.row}>
          <Image style={styles.img} source={require('../image/key3.png')}/>
          <TextInput style={styles.txtinput}
            placeholderTextColor="rgba(30,30,30,0.2)"
            keyboardType="default"
            placeholder="             "
            maxLength={20}
            onChangeText={(matkhau) => this.setState({matkhau})}
            secureTextEntry={true}/>
          </View>
          

          <TouchableOpacity onPress = { () => this.Quenmatkhau() }>
            <Text style={styles.txtquenmk}>Quên Mật Khẩu!</Text>
          </TouchableOpacity>
        </View>

        

        <TouchableOpacity style={styles.txtdn} onPress={ ()=> this.DNhap()}>
          <Text style={styles.txt}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.txtdn} onPress={this.login}>
          <Text style={styles.txt}>Đăng nhập với Zalo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = { () => this.Dangki() }>
          <Text style={styles.txtdk}>Đăng kí người dùng!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  inputform: {
    marginTop: 20,
    width: 330,
    flexDirection: 'column',
    alignSelf: 'center'
  },

  txtTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#5DB075',
    alignSelf: 'center',
    marginTop: 75,
    marginBottom: 20
  },

  txtform: {
    fontStyle: "italic",
    alignSelf: 'flex-start',
    color: "gray"

  },

  txtinput: {
   // padding: 12,
   fontSize: 16
  },

  img1: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 30
  },

  row: {
    flexDirection: 'row',
    height: 60,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#5DB075',
    padding: 5,
  },

  img: {
    marginTop: 11,
    marginStart: 11,
    width: 25,
    height: 25,
    marginEnd: 10
  },

  txtquenmk: {
    alignSelf: 'flex-start',
    marginTop: 7,
    color: 'blue'
  },

  txtdn: {
    width: 330,
    height: 60,
    backgroundColor: '#5DB075',
    color: 'white',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 25,

  },

  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    marginTop: 7
  },

  txtdk: {
    color: 'blue',
    marginTop: 20,
    alignSelf: 'center'
  }


})
