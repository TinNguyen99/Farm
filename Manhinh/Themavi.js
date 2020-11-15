import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert
} from 'react-native';
import base64 from 'react-native-base64';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

// tao avi
export default class  Taoavi extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        idfarm: this.props.navigation.state.params.idfarm,
        ngayvaofemale: '',
        ngayvaomale: '',
        nguongenfemale: '',
        nguongenmale: '',
        avatarSource2: '',
        avatarSource1: '',
        avatarSource0: '',
        imgg: '',
        avatar: ''
      };
    }

 
  gotoRegister (){
    if(this.state.ngayvaomale == '' || ngayvaofemale == '' || 
    this.state.nguongenmale == '' || this.state.nguongenfemale == '' ||
    this.state.avatarSource0 == '' || this.state.avatarSource1 == '' || this.state.avatarSource2 == ''){
      Alert.alert("Vui lòng điền đầy đủ thông tin!");
    } else {

    var { navigation } = this.props;
    let a = this.state.idfarm;
    let iav = 'avi' + a.slice(4);

  

  /// POST THEM MALE
  var aa = base64.decode('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');
  // axios.post("http://192.168.5.105/webmedia/ABB/themmale.php", 
  //   'idmale=' + 'male123' +
  //   '&daycome=' + '2020/01/01' +
  //   '&imgmale=' + this.state.avatar +
  //   '&gen=' + 'HCM' +
  //   '&idavi='+ 'avi123'
    
    
  // )
  // .then(function (response) {
  //   console.log(response);
  //   console.log("OK TN");

    
    
  // })
  // .catch(function (error) {
  //   console.log(error);
  //   console.log("LOI LOI LOI....");
  // });


  // const url = `http://192.168.5.105/webmedia/ABB/getmale.php?
  //     id=avi123`;
  //     //this._interval = setInterval(() => {
  //       axios.get(url)
  //   .then(response => {
  //     console.log(response.data[0].imgmale + "TNNNNNNNNNNNNNN");
      
     
  //       this.setState({
  //         imgg: response.data[0].imgmale
  //       });
      
      

  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
       
}
//<Image style={styles.logo} source={{uri: 'data:image/png;base64,' + this.state.imgg}}/>
  };
    
  render(){
    let img0 = this.state.avatarSource0 == null ? null : 
    <Image  source={this.state.avatarSource0}
    style={{width: 200, height: 200, alignSelf: 'center'}}/> 
    let img1 = this.state.avatarSource1 == null ? null : 
    <Image  source={this.state.avatarSource1}
    style={{width: 200, height: 200, alignSelf: 'center'}}/> 
    let img2 = this.state.avatarSource2 == null ? null : 
    <Image source={this.state.avatarSource2}
    style={{width: 200, height: 200, alignSelf: 'center'}}/> 
    return(
      <View style={styles.container}>
        
        <ScrollView>
        
          <Text style={styles.txth1}>
            Thông tin Aviary
          </Text>
          <TouchableOpacity onPress={ () => this.showimg0()}>
              <Text style={styles.txta}>add a picture!</Text>
        </TouchableOpacity>
        {img0}

        <View style={{marginTop: 15,alignSelf: 'center',width: 330, borderBottomWidth: 3, borderBottomColor: "#5DB075"}}></View>

          <Text style={styles.txth1}>
              Thông tin Male
          </Text>

          <TouchableOpacity onPress={ () => this.showimg1()}>
              <Text style={styles.txta}>add a picture!</Text>
        </TouchableOpacity>
        {img1}

       
          
        <View style={styles.inputform}>
            <Text style={styles.txt}>Ngày vào Aviary</Text>
            <TextInput style={styles.txtinput}
              placeholderTextColor="rgba(30,30,30,0.3)"
              keyboardType="default"
              returnKeyType="next"
              onChangeText={(ngayvaomale) => this.setState({ngayvaomale})}/>
          </View>

          <View style={styles.inputform}>
            <Text style={styles.txt}>Nguồn Gen</Text>
            <TextInput style={styles.txtinput}
              placeholderTextColor="rgba(30,30,30,0.3)"
              keyboardType="number-pad"
              returnKeyType="next"
              onChangeText={(nguongenmale) => this.setState({nguongenmale})}/>
          </View>

          <View style={{marginTop: 15,alignSelf: 'center',width: 330, borderBottomWidth: 3, borderBottomColor: "#5DB075"}}></View>

          <Text style={styles.txth1}>
              Nhập thông tin Female
          </Text>

          <TouchableOpacity onPress={ () => this.showimg2()}>
              <Text style={styles.txta}>add a picture!</Text>
        </TouchableOpacity>
        {img2}


          
        <View style={styles.inputform}>
            <Text style={styles.txt}>Ngày vào Aviary</Text>
            <TextInput style={styles.txtinput}
              placeholderTextColor="rgba(30,30,30,0.3)"
              keyboardType="default"
              returnKeyType="next"
              onChangeText={(ngayvaofemale) => this.setState({ngayvaofemale})}/>
          </View>

          <View style={styles.inputform}>
            <Text style={styles.txt}>Nguồn Gen</Text>
            <TextInput style={styles.txtinput}
              placeholderTextColor="rgba(30,30,30,0.3)"
              keyboardType="number-pad"
              returnKeyType="next"
              onChangeText={(nguongenfemale) => this.setState({nguongenfemale})}/>
          </View>

            <TouchableOpacity 
            style={styles.sign}
            onPress={ () => this.gotoRegister()}>
              <Text style={styles.res}>Thêm</Text>
            </TouchableOpacity>
            </ScrollView>

     </View>
    );
  }

  showimg0 () {
    ImagePicker.showImagePicker(options, (response) => {
      console.log(response);
      console.log(response.data + "SSSSSSSSSSSSSSSSSSSSSSSSS");
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource0: source,
          avatar: response.data
        });
        console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIII');
        
        console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIII');

      }
    });
  }

  showimg1 () {
    ImagePicker.showImagePicker(options, (response) => {
      console.log(response + "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ");

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
        this.setState({
          avatarSource1: source,
        });
        console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIII');
        console.log(this.state.avatarSource1);
        console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIII');

      }
    });
  }

  showimg2 () {
    ImagePicker.showImagePicker(options, (response) => {
      console.log(response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource2: source,
        });

      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgb(32, 53, 70)',
    backgroundColor: 'rgb(250, 250, 250)',
    flexDirection: 'column',
  },

  txth1: {
    fontSize: 30,
    color: '#5DB075',
    marginTop: 10,
    alignSelf: 'center',
    fontWeight: "900",
    fontWeight: 'bold',
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
    height: 60
  },

  txth2: {
    fontSize: 18,
    color: '#dc3131',
    marginTop: 17,
    marginStart: 25,
    fontWeight: "300",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#e7e7e7",
    borderRadius: 25,
    marginStart: 25,
    alignContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    height: 55,
    width: 350,
  },

  forget: {
    marginStart: 30,
    marginTop: 10,
    fontSize: 15,

  },

  sp: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,

  },

  res: {
    marginTop: 12,
    fontSize: 23,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  sign: {
    backgroundColor: "#5DB075",
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 40,
    height: 55,
    width: 350,
    marginBottom: 50
  },
  //
  formheader: {
    height: 200,
    backgroundColor: "#5DB075",
  },

  header: {
    flexDirection: 'row',
    marginBottom: 7,
    marginTop: 7,
  },

  txta: {
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: 'center',
    color: 'gray'
  },

  body: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly'
  },

  colum: {
    flexDirection: 'column',
  },

  chooseavi: {
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 350,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#ff7800"
  },
//
  iconback: {
    width: 30,
    height: 30,
    marginStart: 20,
    alignSelf: 'stretch',
    marginTop: 9
  },

  txtheader: {
    fontSize: 25,
    fontWeight: "bold",
    marginStart: 120,
    marginTop: 7,
    color: '#5DB075'
  },

  formcross: {
    marginStart: 5,
    height: 80,
    width: 390,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
  },

  rowcross: {
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },

  txtcross: {
    fontSize: 23,
    fontWeight: "bold",
    marginEnd: 200,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginStart: 40
  },

  icon: {
    width: 30,
    height: 30,
    marginEnd: 17,
    alignSelf: 'flex-end',
    marginTop: 20,
    marginStart: 40,
  },

  addcross: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 350,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30
  },

  txtadd: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: 'center',
    color: 'white'
  },

  imgbottom: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
  logo: {
    height: 90,
    width: 90,
    
  },

  


})
