import React, {Component} from 'react';
import {Text, Button} from 'react-native-paper';
import {StyleSheet, StatusBar, View} from 'react-native';

class bill extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
            03 September 2019: 20:31{'\n'}
          </Text>

          <View
            style={{
              backgroundColor: '#778ca3',
              height: 1,
              width: '100%',
              marginVertical: 15,
            }}></View>

          <View style={{flexDirection: 'row', alignItems: 'space-between'}}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'red',
                marginLeft: 15,
              }}>
              Waiting
            </Text>
            <Text style={{fontSize: 17, textAlign: 'center', marginLeft: 15}}>
              
            </Text>
            <Text style={{fontSize: 17, textAlign: 'center', marginLeft: 15}}>
              Rp. 0
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#778ca3',
              height: 1,
              width: '100%',
              marginVertical: 15,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'space-between',
              backgroundColor: '#C40C42',
              height: 130,
              width: '100%',
              borderRadius: 5,
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.bill}>Sub Total</Text>

              <Text style={styles.bill}>Discount</Text>

              <Text style={styles.bill}>Service Charge(5.5%)</Text>

              <Text style={styles.bill}>Tax(10%)</Text>

              <Text
                style={{
                  textAlign: 'left',
                  marginVertical: 5,
                  marginHorizontal: 15,
                  fontWeight: 'bold',
                  color:'white'
                }}>
                Total
              </Text>
            </View>

            <View style={{flex: 1}}>
              <Text style={styles.bill}>RP. 0</Text>

              <Text style={styles.bill}>Rp. 0</Text>

              <Text style={styles.bill}>Rp. 0</Text>

              <Text style={styles.bill}>Rp. 0</Text>

              <Text
                style={{
                  textAlign: 'left',
                  marginVertical: 5,
                  marginHorizontal: 15,
                  fontWeight: 'bold',
                  color:'white'
                }}>
                Rp. 0
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#778ca3',
              height: 1,
              width: '100%',
              marginVertical: 15,
            }}></View>

          <View style={{flexDirection: 'row', alignItems: 'space-between'}}>
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
        </View>
    );
  }
}

export default bill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },

  bill: {
    textAlign: 'left',
    marginVertical: 5,
    marginHorizontal: 15,
    color:'white'
  },
});