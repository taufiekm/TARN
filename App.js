import React, {Component} from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import  {Provider} from 'react-redux'

import tmstore  from './src/redux/tmstore'
import PublicStack from './src/navigation/PublicStack'


const AppNavigator = createSwitchNavigator({
  PublicStack: PublicStack
}, {
    initialRouteName: 'PublicStack'
  })
const AppContainer = createAppContainer(AppNavigator);


class App extends Component {
  render() {
    return (
      <Provider store={tmstore}>
        <AppContainer />
      </Provider>
    )
  }
}
export default App
