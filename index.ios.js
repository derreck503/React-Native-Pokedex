/**
 * Derreck Stellpflug
 * https://github.com/derreck503
 * Pokedex App
 */

 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ListView,
} from 'react-native';
import pokedex from './pokedex.json'

class Pokedex extends Component {

constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={require('./pokedex.png')}/>

      <Text style={styles.welcome}>
      Welcome to Derreck's Pokedex!
      </Text>

      <Image
        style = {{width: 250, height: 250}}
        source={{uri: pokedex.pokemon[0].img}}
      />
      <Text style={styles.instructions}>
      To get started, type in a filter!
      </Text>

      <View style = {styles.container1}>
      <TextInput style = {styles.searchInput} placeholder = '  Insert Text' />
      <TouchableHighlight style = {styles.button} underlayColor = '#99d9f4'>
      <Text style = {styles.buttonText}>Search</Text>
      </TouchableHighlight>
      </View>
  
      <View style={styles.data}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>

      </View>



      );
    }
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 25,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      paddingBottom: 5,
    },
    searchInput: {
      height:40,
      width:250,
      fontSize:18,
      borderWidth:1,
      color:'black',
      borderColor:'#48BBEC',
      borderRadius:1,
    },
    buttonText: {
      fontSize:18, 
      color:'white',
      alignSelf:'center'
    },
    button: {
      height:40,
      backgroundColor:'#48BBEC',
      borderColor:'#48BBEC',
      marginLeft:10,
      width:80,
      alignSelf:'stretch',
      justifyContent:'center'
    },
    container1:{
      flexDirection: 'row', 
    },
    data: {
      paddingTop: 5,
      paddingLeft: 5,
      fontSize: 20,
      alignSelf: 'flex-start',
      margin: 0,
    }
  });

  AppRegistry.registerComponent('Pokedex', () => Pokedex);
