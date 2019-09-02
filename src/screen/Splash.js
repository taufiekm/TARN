import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Button} from 'react-native-paper';
import {  Item, Input, Icon} from 'native-base'; 

class Login extends Component {
  render() {
    return (
       
        <View style={styles.container}>
            <Text style={styles.Text}>WELCOME TO KEDAI TAUFIEK MAULANA</Text>
          <View style={{padding: 20, paddingTop: 35}}>
            <Item regular style={{borderRadius: 20, Colors:'#C40C42', alignItems:'center'}}>
              <Input placeholder='No. Table'  keyboardType={'numeric'}/>
            </Item>
          </View>
          
            <View style={{paddingLeft:20, paddingRight:20,}}>
              <Button style={{height:40 ,borderRadius:25, backgroundColor:'#C40C42'}} color="black" mode="contained" onPress={() => this.props.navigation.navigate('PublicNav')}>
                START ORDER
              </Button>
            </View>
        </View>
      
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        alignContent: 'center',
        justifyContent:'center'
    }, 
    Text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        paddingBottom:50,
        color:'#C40C42'
    },
    input:{
      width :200,
      borderColor:"#C40C42",
      paddingTop:5
    },
    
    icon:{
      color:"#C40C42" 
      
    },
  })
  export default Login;