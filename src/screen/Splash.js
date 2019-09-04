import React, { Component } from 'react'
import { StyleSheet,StatusBar, View, Text,Image} from 'react-native'
import { Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import {  Item, Input} from 'native-base';
import { addTransaction } from '../../src/redux/actions/transaction'



class splash extends Component {
  constructor() {
    super()
    this.state = {
        table: null,
        count: null
    }
}

  onTable = (table) => {this.setState({table})}
  tableSend = async () => {
    if (this.state.table == null) {
      return false

    } else {
      await AsyncStorage.setItem('tableNumber', this.state.table)
      await this.props.dispatch(addTransaction({
          tableNumber: this.state.table,
          isPaid: 0
      }))
      await AsyncStorage.setItem('transactionId', `${this.props.transaction.data.id}`)
      await this.props.navigation.navigate('PublicNav')
    }
  }


  render() {
    return (
       
        <View style={styles.container}>
          <StatusBar
            backgroundColor='#C40C42'
            barStyle='light-content'
          />
          <Text style={styles.Text}>WELCOME TO{"\n"}RESTO APP</Text>
          <View style={{alignItems:'center', paddingBottom: 20}}>
            <Image
            style={{width: 120, height: 150}}
            source={require('../images/logo2.png')}
            />
          </View>
          <Text style={styles.intro}>pelase Insert Your Table Number</Text>
          <View style={{padding: 20, paddingTop: 15}}>
            <Item regular style={{borderRadius: 20, Colors:'#C40C42', alignItems:'center'}}>
              <Input style={{textAlign:'center', color:'white'}} placeholder='No. Table' keyboardType={'numeric'} onChangeText={this.onTable}/>
            </Item>
          </View>
          <View style={{paddingLeft:20, paddingRight:20,}}>
            <Button style={{height:40 ,borderRadius:25, backgroundColor:'white'}} color="black" mode="outlined" onPress={this.tableSend}>
              START ORDER
            </Button>
          </View>
        </View>
      
      );
    }
  }

  const mapStateToProps = state => {
    return {
        transaction: state.transaction
    }
}


  const styles = StyleSheet.create({
    container:{
        backgroundColor:'#C40C42',
        flex: 1,
        padding: 20,
        alignContent: 'center',
        justifyContent:'center',
    }, 
    Text:{
        textAlign:'center',
        fontSize: 25,
        paddingBottom: 35,
        color:'white'
    },
    input:{
      width :200,
      borderColor:"#C40C42",
      paddingTop:5
    },
    intro:{
        color:'white',
        textAlign:'center'
      },
    icon:{
      color:"#C40C42" 
      
    },
  })
  export default connect(mapStateToProps)(splash)