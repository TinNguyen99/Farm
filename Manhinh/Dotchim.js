import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

var arr = [1,2,3,4,5,6,7];
var arr2 = [1,2,3,4,5,6];
var Data2 = [];
var Data3 = [];

const Data = [
  {
    ten: 'coi F1',
    diachi: 'Go Vap - P1 - HCM',
    chiphi: '500K',
    ar: [1, 3, 5],
    art: [1, 5],
    wifi: 0, // 0
    cafe: 1, // 1
    ansang: 1, // 2
    chodauxe: 1, // 3
    coixemua: 0, // 4
    doanchochim: 0, // 5
  },
  {
    ten: 'coi F2',
    diachi: 'Go Vap - P1 - HCM',
    chiphi: '700K',
    ar: [2, 4, 6, 7],
    art: [2, 3],
    wifi: true,
    cafe: false,
    ansang: true,
    chodauxe: true,
    coixemua: true,
    doanchochim: true,
  },
  {
    ten: 'coi F3',
    diachi: 'Go Vap - P1 - HCM',
    chiphi: '200K',
    ar: [1, 2, 3, 5, 7],
    art: [4,5],
    wifi: false,
    cafe: false,
    ansang: true,
    chodauxe: true,
    coixemua: false,
    doanchochim: false,
  },
  {
    ten: 'coi F4',
    diachi: 'Go Vap - P1 - HCM',
    chiphi: '500K',
    ar: [1, 3, 5, 6, 7],
    art: [1,2,3,4],
    wifi: true,
    cafe: true,
    ansang: true,
    chodauxe: true,
    coixemua: false,
    doanchochim: true,
  },
]
export default class Dotchim extends Component {

  

  constructor(props){
    super(props);
    this.state = {
      arr3: [],
      T1: true,
      T2: true,
      T3: true,
      T4: true,
      T5: true,
      T6: true,
      T7: true,
      wifi: true,
      cafe: true,
      ansang: true,
      chodauxe: true,
      coixemua: true,
      doanchochim: true,
    }
    
    
    
  }

  T1(){
    this.setState({
      T1: !this.state.T1 
    });
    if(!this.state.T1){
      arr[0] = 1;
    } else {
      arr[0] = 0;
    }
    console.log(arr[0]);
  }

  T2(){
    this.setState({
      T2: !this.state.T2 
    });
    if(!this.state.T2){ 
      arr[1] = 2;
    } else {
      arr[1] = 0;
    }
    console.log(arr[1]);
  }

  T3(){
    this.setState({
      T3: !this.state.T3 
    });
    if(!this.state.T3){
      arr[2] = 3;
    } else {
      arr[2] = 0;
    }
    console.log(arr[2]);
  }

  T4(){
    this.setState({
      T4: !this.state.T4 
    });
    if(!this.state.T4){
      arr[3] = 4;
    } else {
      arr[3] = 0;
    }
    console.log(arr[3]);
  }

  T5(){
    this.setState({
      T5: !this.state.T5 
    });
    if(!this.state.T5){
      arr[4] = 5;
    } else {
      arr[4] = 0;
    }
    console.log(arr[4]);
  }

  T6(){
    this.setState({
      T6: !this.state.T6
    });
    if(!this.state.T6){
      arr[5] = 6;
    } else {
      arr[5] = 0;
    }
    console.log(arr[5]);
  }

  T7(){
    this.setState({
      T7: !this.state.T7
    });
    if(!this.state.T7){
      arr[6] = 7;
    } else {
      arr[6] = 0;
    }
    console.log(arr[6]);
  }

  wifi(){
    this.setState({
      wifi: !this.state.wifi
    });
    if(!this.state.wifi){
      arr2[0] = 1;
    } else {
      arr2[0] = 0;
    }
    console.log(arr2[0]);
  }

  cafe(){
    this.setState({
      cafe: !this.state.cafe
    });
    if(!this.state.cafe){
      arr2[1] = 2;
    } else {
      arr2[1] = 0;
    }
    console.log(arr2[1]);
  }

  ansang(){
    this.setState({
      ansang: !this.state.ansang
    });
    if(!this.state.ansang){
      arr2[2] = 3;
    } else {
      arr2[2] = 0;
    }
    console.log(arr2[2]);
  }

  chodauxe(){
    this.setState({
      chodauxe: !this.state.chodauxe
    });
    if(!this.state.chodauxe){
      arr2[3] = 4;
    } else {
      arr2[3] = 0;
    }
    console.log(arr2[3]);
  }

  coixemua(){
    this.setState({
      coixemua: !this.state.coixemua
    });
    if(!this.state.coixemua){
      arr2[4] = 5;
    } else {
      arr2[4] = 0;
    }
    console.log(arr2[4]);
  }

  doanchochim(){
    this.setState({
      doanchochim: !this.state.doanchochim
    });
    if(!this.state.doanchochim){
      arr2[5] = 6;
    } else {
      arr2[5] = 0;
    }
    console.log(arr2[5]);
  }

  _render = ({item}) => {
    return(
      <View style={styles.item}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txtitem}>Tên địa điểm: </Text>
          <Text style={styles.txtitem2}>{item.ten}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txtitem}>Địa chỉ: </Text>
          <Text style={styles.txtitem2}>{item.diachi}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txtitem}>Chi phí (VNĐ)/Tháng: </Text>
          <Text style={styles.txtitem2}>{item.chiphi}</Text>
        </View>
        
       
      </View>
    )
  }

  Locdb(){
    Data2 = [];
    
    console.log(arr);
    for (let x of Data){
      for (let z of x.ar){
        if (arr.includes(z)){
          Data2.push(x);
          break;
        }
      }
    }
    Data3 = [];
    if(Data2 != []){
      for(let q of Data2){
        for(let p of q.art){
          if (arr2.includes(p)){
            Data3.push(q);
            break;
          }
        }
      }
    }
    
   this.setState({
     arr3: Data3
   })
    
  }

  render() {
    let t1 = this.state.T1 ? 
      <Text style={styles.tt1}>CN</Text> :
      <Text style={styles.tt2}>CN</Text>;
    let t2 = this.state.T2 ? 
      <Text style={styles.tt1}>T2</Text> :
      <Text style={styles.tt2}>T2</Text>;
    let t3 = this.state.T3 ? 
      <Text style={styles.tt1}>T3</Text> :
      <Text style={styles.tt2}>T3</Text>;
    let t4 = this.state.T4 ? 
      <Text style={styles.tt1}>T4</Text> :
      <Text style={styles.tt2}>T4</Text>;
    let t5 = this.state.T5 ? 
      <Text style={styles.tt1}>T5</Text> :
      <Text style={styles.tt2}>T5</Text>;
    let t6 = this.state.T6 ? 
      <Text style={styles.tt1}>T6</Text> :
      <Text style={styles.tt2}>T6</Text>;
    let t7 = this.state.T7 ? 
      <Text style={styles.tt1}>T7</Text> :
      <Text style={styles.tt2}>T7</Text>;


    let wifi = this.state.wifi ? 
      <Text style={styles.tt1}>Wifi</Text> :
      <Text style={styles.tt2}>Wifi</Text>;
    let cafe = this.state.cafe ? 
      <Text style={styles.tt1}>Cafe</Text> :
      <Text style={styles.tt2}>Cafe</Text>;
    let ansang = this.state.ansang ? 
      <Text style={styles.tt1}>An sang</Text> :
      <Text style={styles.tt2}>An sang</Text>;
    let chodauxe = this.state.chodauxe ? 
      <Text style={styles.tt1}>Cho dau xe</Text> :
      <Text style={styles.tt2}>Cho dau xe</Text>;
    let coixemua = this.state.coixemua ? 
      <Text style={styles.tt1}>Coi xe mua</Text> :
      <Text style={styles.tt2}>Coi xe mua</Text>;
    let doanchochim = this.state.doanchochim ? 
      <Text style={styles.tt1}>Do an cho chim</Text> :
      <Text style={styles.tt2}>Do an cho chim</Text>;
    return (
      
      <View style={styles.container}>
        <Text style={styles.txt}> Dợt Chim </Text>
        <Text style={styles.title}>Chọn ngày hoạt động</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=> this.T1()}>
            <Text>{t1}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.T2()}>
            <Text>{t2}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.T3()}>
            <Text>{t3}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.T4()}>
            <Text>{t4}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.T5()}>
            <Text>{t5}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.T6()}>
            <Text>{t6}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.T7()}>
            <Text>{t7}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Chọn tiện ích</Text>

        <View style={styles.row}>
          <TouchableOpacity onPress={()=> this.wifi()}>
            <Text>{wifi}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.cafe()}>
            <Text>{cafe}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.ansang()}>
            <Text>{ansang}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.chodauxe()}>
            <Text>{chodauxe}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.coixemua()}>
            <Text>{coixemua}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.doanchochim()}>
            <Text>{doanchochim}</Text>
          </TouchableOpacity>
        </View>

        
          <TouchableOpacity onPress={()=> this.Locdb()}>
            <View style={styles.btnloc}>
              <Text style={styles.txtloc}>Lọc</Text>
            </View>
          </TouchableOpacity>
        
        

        <FlatList 
        keyExtractor={item => item.ten}
        data={Data3}
        renderItem={this._render}
        />
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
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25
  },

  tt1: {
    color: '#5DB075',
    fontWeight: 'bold',
  },

  tt2: {
    color: 'gray',
    fontWeight: 'bold',
  },

  btnloc: {
    flexDirection: 'row',
    backgroundColor: "#5DB075",
    width: 370,
    height: 45,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },

  txtloc: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  item: {
    marginHorizontal: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#5DB075",
    marginVertical: 8,
  },

  title: {
    fontSize: 17,
    marginStart: 20,
    fontWeight: 'bold',
    color: '#d7ab42',
    marginTop: 20,
  },

  txtitem: {
    fontSize: 17,
    color: 'gray'
  },

  txtitem2: {
    fontSize: 17,
    color: '#42bcd7',
    fontWeight: 'bold',
    marginStart: 20
  }
})