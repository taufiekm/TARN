import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import Explore from '../screen/ExplorePage'
import Login from '../screen/LoginPage'

const PublicNav = createMaterialTopTabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Menu',
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            tabBarLabel: 'Category',
        }
    }
},
 {
        tabBarOptions: {
            activeTintColor: '#C40C42',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: '#ffffff',
                borderTopWidth: 0,
                shadowOffset: { width: 6, height: 6 },
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 6,
                paddingTop: 10
            }
        }
    });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default createAppContainer(PublicNav)