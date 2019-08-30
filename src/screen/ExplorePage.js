import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';



export default class ExplorePage extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>test</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  }
});
