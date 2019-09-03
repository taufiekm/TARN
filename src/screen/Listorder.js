import React, { Component } from 'react';
import { View, Text , StyleSheet, } from 'react-native';
import {Button} from 'react-native-paper';


export default class done extends Component {
    
  render() {
    return (
      
     <View style={styles.container}>
        <View>
            <Text style={{fontSize:50, textAlign:'center', color:'#C40C42'}}>Ups....</Text>
            <Text style={{marginBottom:15 ,color:'#C40C42',textAlign:'center'}}> You don't Have Any Order </Text>
        </View>
        <View>
            <Text style={{ textAlign:'center', color:'white'}}>Please Order First</Text>
        </View>
        <Button
            mode="contained"
            color="#C40C42"
            style={{width: '50%'}}
            onPress={() => {
            this.props.navigation.navigate('Drink');
            }}>
            
            <Text style={{ color:'white', fontSize: 18}}>Back To Menu</Text>
        </Button>
     </View>   
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white'

  }
})