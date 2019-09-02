import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

import { getCategories } from '../../src/redux/actions/categories';


class ExplorePage extends Component {


  componentDidMount() {
    this.props.dispatch(getCategories())
}

loading = () => {
    return (<View style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }}>
        <ActivityIndicator size={50} />
    </View>)
}

renderItem = ({ item }) => {
    return (
        <View style={styles.FlatList}>
            <TouchableOpacity underlayColor='white'  onPress={() => this.props.navigation.navigate('LoginPage')}>
                <Card
                    containerStyle={styles.Card}
                    image={{ uri: 'https://scm-assets.constant.co/scm/unilever/2bb5223be0548fcc55c230aa5f951219/c5b644d4-7bd0-4021-b3d1-085021fa1b97.jpg' }}
                >
                    <Text>{item.name}</Text>
                </Card>
            </TouchableOpacity>
        </View >
    )
}
  
  render() {
    const extractKey = ({ id }) => id.toString()
    return (

      <View style={styles.container}>
        
        <View style={{flexDirection:'row', padding:20}}>
          <View style={{flex:1, flexDirection:'row'}}>
            <Text style={styles.header1}>No. Table: </Text>
            <Text style={styles.header1}>1</Text>
          </View>
          <View>
            <Text style={styles.header1}>Time Coundown</Text>
          </View>
        </View>

          {this.props.categories.isLoading == true &&
            this.loading()
          }
          {this.props.categories.isLoading == false &&
              < FlatList
                  numColumns={2}
                  data={this.props.categories.data}
                  renderItem={this.renderItem}
                  keyExtractor={extractKey}
                  style={{ marginBottom: 10, flex: 1 }}
              />
            }

      </View>

    );
  }
}
const mapStateToProps = state => {
  return {
      categories: state.categories
  }
}

export default connect(mapStateToProps)(ExplorePage)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent:'center',
    padding: 10
  },
  Card:{
    height: 200,
    width: 145
    },
    header1:{
      color: 'black'
    }
});
