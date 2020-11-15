import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import AntDesign from "react-native-vector-icons/Octicons";
import AntDesign2 from "react-native-vector-icons/Ionicons";

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      ten: this.props.navigation.state.params.ten,
      iduser: this.props.navigation.state.params.iduser
    }
  }

  Quanlifarm (){
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("Quanlifarm", datapass);
  }

  Dotchim(){
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("Dotchim", datapass);
  }

  Checkdna(){
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("CheckDNA", datapass);
  }

  Daugia(){
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("Daugia", datapass);
  }

  Quanlichim(){
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("Quanlichim", datapass);
  }

  Checkchim(){
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("Checkchim", datapass);
  }

  Congviec(){
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("Congviec", datapass);
  }

  Taichinh(){
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("Taichinh", datapass);
  }

  Huongdan(){
    const { navigation } = this.props;
    var datapass = {
      iduser: this.state.iduser
    }
    navigation.navigate("Huongdan", datapass);
  }

  
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dangnhap')}>
                  <AntDesign2
                  name="log-out-outline"
                  size={30}
                  />
                </TouchableOpacity>
                <Text style={styles.txtname}>Chào {this.state.ten}!</Text>
                
                  
            
            </View>
             
             <View style={styles.bell}>
                <AntDesign
                name="bell"
                size={30}
                color="red"
                />
             </View>
             
         </View>

         <View style={styles.container}>
           <View style={styles.row}>
              <TouchableOpacity style={styles.item} onPress={()=>this.Quanlifarm()}>
                <Text style={styles.txt}>Quản lí Farm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={()=>this.Checkchim()}>
                <Text style={styles.txt}>Check Chim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={()=>this.Checkdna()}>
                <Text style={styles.txt}>Check DNA</Text>
              </TouchableOpacity>
           </View>
         </View>

         <View style={styles.container}>
           <View style={styles.row}>
              <TouchableOpacity style={styles.item} onPress={()=>this.Quanlichim()}>
                <Text style={styles.txt}>Quản lí Chim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={()=>this.Dotchim()}>
                <Text style={styles.txt}>Dợt Chim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={()=>this.Daugia()}>
                <Text style={styles.txt}>Đấu giá</Text>
              </TouchableOpacity>
           </View>
         </View>


         <View style={styles.container}>
           <View style={styles.row}>
              <TouchableOpacity style={styles.item} onPress={()=>this.Congviec()}>
                <Text style={styles.txt}>Công việc</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={()=>this.Taichinh()}>
                <Text style={styles.txt}>Tài chính</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={()=>this.Huongdan()}>
                <Text style={styles.txt}>Hướng dẫn</Text>
              </TouchableOpacity>
           </View>
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  header: {
    marginBottom: 50,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  item: {
    width: 120,
    height: 120,
    backgroundColor: '#5DB075',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  txtname: {
      marginStart: 10,
      marginTop: 4,
      fontSize: 17,
      fontWeight: 'bold',
      color: 'gray'
  },

  txt: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white'
  }
})
