import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card, Button  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'

class Drink extends Component {
  static navigationOptions = {
    headerTintColor: '#FF9800',
    headerStyle: {
      backgroundColor: 'white',
      elevation: 0,
    },
  };

  button() {
    Alert.alert(
      'Are You Sure To This Order',
      'Please Check Again',
      [
        {text: 'NO', onPress: () => console.warn('NO Pressed')},
        {text: 'YES', onPress: () => this.props.navigation.navigate('Done')}

      ]
    );
  }

  render() {
    return (
      <View style={styles.container}>
  
        <ScrollView>
          <View>
            <Card
              image={{uri :'http://www.dapurkobe.co.id/wp-content/uploads/nasi-goreng-kencur-kemangi.jpg'}}>
              <Text style={{marginBottom: 10, color:'black', fontWeight:'bold'}}>
                Nasi goreng rempah ala tradisional
              </Text>
              <View style={{flex:2, flexDirection:'row'}}>
                <View style={{ flex:1, alignItems:'flex-start'}}>
                  <Text style={{color:'black'}}>Rp. 25.000</Text>
                </View>
                <View style={{flex:1, alignItems:'flex-end'}}>
                  <View style={{ height: 30, width: 90, backgroundColor: 'white', elevation: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding:5, borderRadius: 5 }}>
                      <TouchableOpacity>
                          <View>
                              <Icon name='minus' color='#C40C42' size={20} />
                          </View>
                      </TouchableOpacity>
                      <Text style={{ fontWeight: 'bold', color: 'black' }}>0</Text>
                      <TouchableOpacity>
                          <View>
                              <Icon name='plus' color='#C40C42' size={20} />
                          </View>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          
          <View>
            <Card
              image={{uri :'https://upload.wikimedia.org/wikipedia/commons/e/e9/Nasi_kerabu.jpg'}}>
              <Text style={{marginBottom: 10, color:'black', fontWeight:'bold'}}>
                Nasi kerabu
              </Text>
              <View style={{flex:2, flexDirection:'row'}}>
                <View style={{ flex:1, alignItems:'flex-start'}}>
                  <Text style={{color:'black'}}>Rp. 35.000</Text>
                </View>
                <View style={{flex:1, alignItems:'flex-end'}}>
                  <View style={{ height: 30, width: 90, backgroundColor: 'white', elevation: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding:5, borderRadius: 5 }}>
                      <TouchableOpacity>
                          <View>
                              <Icon name='minus' color='#C40C42' size={20} />
                          </View>
                      </TouchableOpacity>
                      <Text style={{ fontWeight: 'bold', color: 'black' }}>0</Text>
                      <TouchableOpacity>
                          <View>
                              <Icon name='plus' color='#C40C42' size={20} />
                          </View>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>

        <View style={{flexDirection:'row', justifyContent: 'space-between', paddingBottom:20, paddingLeft:20, paddingRight:20}}>
          <View>
            <Button buttonStyle={{borderRadius: 10, backgroundColor:'#C40C42', width: 80}}
             title='List Order' onPress={() => this.props.navigation.navigate('Listorder')}/>
          </View>
          <View>
            <Button buttonStyle={{borderRadius: 10, backgroundColor:'#C40C42', width: 80}}
             title= 'Bill' onPress={() => this.props.navigation.navigate('Bill')}/>
          </View>
          <View>
            <Button buttonStyle={{borderRadius: 10, backgroundColor:'#C40C42', width: 80 }}
            onPress={() => this.button()}
            title='Confrim'/>
          </View>
        </View>

        
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
})


export default Drink