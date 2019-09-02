import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Snack extends Component {
  static navigationOptions = {
    headerTintColor: '#FF9800',
    headerStyle: {
      backgroundColor: 'white',
      elevation: 0,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
})


export default Snack