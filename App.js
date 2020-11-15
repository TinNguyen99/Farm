
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Dangnhap from './Manhinh/Dangnhap';
import Dangki from './Manhinh/Dangki';
import Home from './Manhinh/Home';
import Quanlifarm from './Manhinh/Quanlifarm';
import Themfarm from './Manhinh/Themfarm';
import Thongtinavi from './Manhinh/Thongtinavi';
import Themavi from './Manhinh/Themavi';
import Quanlichim from './Manhinh/Quanlichim';
import Dotchim from './Manhinh/Dotchim';
import Chinhthongtin from './Manhinh/Chinhthongtin';
import Camnang from './Manhinh/Camnang';
import Chitietavi from './Manhinh/Chitietavi';
import Camera from './Manhinh/Camera';
import Daugia from './Manhinh/Daugia';
import CheckDNA from './Manhinh/CheckDNA';
import Checkchim from './Manhinh/Checkchim';
import Taichinh from './Manhinh/Taichinh';
import Congviec from './Manhinh/Congviec';
import Huongdan from './Manhinh/Huongdan';
import Themchimmoi from './Manhinh/Themchimmoi';


const AppNavigator = createStackNavigator({
  Dangnhap: {
    screen: Dangnhap,
    navigationOptions: {
      headerShown: false,
    },
  },

  Dangki: {
    screen: Dangki,
    navigationOptions: {
      headerShown: false,
    },
  },

  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },

  Quanlifarm: {
    screen: Quanlifarm,
    navigationOptions: {
      headerShown: false,
    },
  },

  Themfarm: {
    screen: Themfarm,
    navigationOptions: {
      headerShown: false,
    },
  },

  Thongtinavi: {
    screen: Thongtinavi,
    navigationOptions: {
      headerShown: false,
    },
  },

  Themavi: {
    screen: Themavi,
    navigationOptions: {
      headerShown: false,
    },
  },

  Quanlichim: {
    screen: Quanlichim,
    navigationOptions: {
      headerShown: false,
    },
  },

  Dotchim: {
    screen: Dotchim,
    navigationOptions: {
      headerShown: false,
    },
  },

  Chinhthongtin: {
    screen: Chinhthongtin,
    navigationOptions: {
      headerShown: false,
    },
  },

  Camnang: {
    screen: Camnang,
    navigationOptions: {
      headerShown: false,
    },
  },

  Chitietavi: {
    screen: Chitietavi,
    navigationOptions: {
      headerShown: false,
    },
  },

  Camera: {
    screen: Camera,
    navigationOptions: {
      headerShown: false,
    },
  },

  Congviec: {
    screen: Congviec,
    navigationOptions: {
      headerShown: false,
    },
  },

  Huongdan: {
    screen: Huongdan,
    navigationOptions: {
      headerShown: false,
    },
  },

  Taichinh: {
    screen: Taichinh,
    navigationOptions: {
      headerShown: false,
    },
  },

  CheckDNA: {
    screen: CheckDNA,
    navigationOptions: {
      headerShown: false,
    },
  },

  Checkchim: {
    screen: Checkchim,
    navigationOptions: {
      headerShown: false,
    },
  },

  Daugia: {
    screen: Daugia,
    navigationOptions: {
      headerShown: false,
    },
  },

  Themchimmoi: {
    screen: Themchimmoi,
    navigationOptions: {
      headerShown: false,
    },
  },

});

export default createAppContainer(AppNavigator);