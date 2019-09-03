import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button  } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'

class ExplorePage extends Component {
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
       
        <View style={{flexDirection:'row', paddingLeft: 20, paddingRight:20, paddingTop:20}}>
          <View style={{flex:1, flexDirection:'row'}}>
            <Text style={styles.header1}>No. Table: </Text>
            <Text style={styles.header1}>{this.state.table}</Text>
          </View>
          <View>
            <Text style={styles.header1}>Time Coundown</Text>
          </View>
        </View>
        <ScrollView>
          <View>
            <Card
              image={{uri :'http://www.washokusato.co.id/wp-content/uploads/2014/01/LED_1920x1080px_landscape_Member-Promo-Sept-03a-1024x576.jpg'}}>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                buttonStyle={{borderRadius: 20, backgroundColor:'#C40C42',}}
                title='VIEW NOW' />
            </Card>
          </View>

          <View>
            <Card
              image={{uri :'http://www.washokusato.co.id/wp-content/uploads/2014/01/LED_1920x1080px_landscape_Member-Promo-Sept-03a-1024x576.jpg'}}>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                buttonStyle={{borderRadius: 20, backgroundColor:'#C40C42',}}
                title='VIEW NOW' />
            </Card>
          </View>

          <View>
            <Card
              image={{uri :'http://www.washokusato.co.id/wp-content/uploads/2014/01/LED_1920x1080px_landscape_Member-Promo-Sept-03a-1024x576.jpg'}}>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                backgroundColor='#C40C42'
                buttonStyle={{borderRadius: 20, backgroundColor:'#C40C42',}}
                title='VIEW NOW' />
            </Card>
          </View>

          <View>
            <Card
              image={{uri :'http://www.washokusato.co.id/wp-content/uploads/2014/01/LED_1920x1080px_landscape_Member-Promo-Sept-03a-1024x576.jpg'}}>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                backgroundColor='#C40C42'
                buttonStyle={{borderRadius: 20, backgroundColor:'#C40C42',}}
                title='VIEW NOW' />
            </Card>
          </View>
        </ScrollView>
        {/* <View>
          
        <View style={{flex:1, flexDirection:'row', paddingBottom:200}}>
          <View>
            <Text>
              LFNANFJAFKA JSFAJSFJAHFS SFAJHSJKA SFJAHSJFHAS FJFSHAJFHSA JSFHAJHFSA FASFHAKSJHFA FSAJHFAS</Text> 
            </View>
          <View>
            <View>
              <Text>buttob</Text>
            </View>
            <View>
              <Text>Button</Text>
            </View>
          </View>
        </View>
        </View> */}

        
      </View>

    );
  }
}

const mapStateToProps = state => {
  return {
      categories: state.categories
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header1:{
    color: 'black'
  },
  Card:{
    height: 200,
    width: 145
    },
})


export default connect(mapStateToProps)(ExplorePage) 