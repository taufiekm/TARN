import React, {Component} from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import PublicStack from './src/navigation/PublicStack'


const AppNavigator = createSwitchNavigator({
  PublicStack: PublicStack
}, {
    initialRouteName: 'PublicStack'
  })
const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}
