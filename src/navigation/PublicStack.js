import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import PublicNav from './PublicNav'
import Explore from '../screen/ExplorePage'
import LoginPage from '../screen/LoginPage'
import Splash from '../screen/Splash'
import Drink from '../screen/Drink'
import Snack from '../screen/Snack'



const stackpublic = createStackNavigator({
    PublicNav:PublicNav,
    Explore:Explore,
    LoginPage:LoginPage,
    Splash:Splash,
    Drink:Drink,
    Snack:Snack

} ,{
    initialRouteName: "Splash",
    headerMode: 'none'
});

const AppContainer = createAppContainer(stackpublic)

class PublicStack extends Component {
    render() {
      return (
        <AppContainer />
      )
    }
  }
  export default PublicStack;