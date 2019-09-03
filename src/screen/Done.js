import React, { Component } from 'react';
import { View, Text , StyleSheet, } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';


export default class done extends Component {
    constructor() {
        super()
        this.state = {
            table: '',
            count: null
        }
    }
    
    async componentWillMount() {
      const table = await AsyncStorage.getItem('tableNumber')
      this.setState({
          table
      })
    }

  render() {
    return (
      
     <View style={styles.container}>
        <View>
            <Text style={{fontSize:50, textAlign:'center', color:'white'}}>No. Table "{this.state.table}"</Text>
            <Text style={{marginBottom:15 ,color:'white',textAlign:'center'}}> PLEASE BRING THE IPAD TO THE CASHIER TO PROCCESS WITH THE PAYMENT </Text>
        </View>
        <View>
            <Text style={{ textAlign:'center', color:'white'}}>THANK YOU</Text>
        </View>
     </View>   
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: '#C40C42'
  }
})