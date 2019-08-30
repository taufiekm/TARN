import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import PublicNav from './PublicNav'
import Explore from '../screen/ExplorePage'
import Loginnul from '../screen/LoginPage'


const SatackPublic = createStackNavigator({
    PublicNav:PublicNav,
    Explore:Explore,
    LoginStart:Loginnul,

} ,{
    initialRouteName: "PublicNav",
    headerMode: 'none'
});

class PublicStack extends Component {
    render() {
      return (
        <PublicStack />
      );
    }
  }
  export default SatackPublic;