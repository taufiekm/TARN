import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import Explore from '../screen/ExplorePage'
import Login from '../screen/LoginPage'
import Drink from '../screen/Drink'
import Snack from '../screen/Snack'

const PublicNav = createMaterialTopTabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Promo',
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            tabBarLabel: 'Food',
        }
    },
    Drink:{
        screen: Drink,
        navigationOptions:{
            tabBarLabel: 'Drink',
        }
    },
    Snack:{
        screen: Snack,
        navigationOptions:{
            tabBarLabel: 'Snack',
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