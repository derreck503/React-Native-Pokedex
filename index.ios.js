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
    
    const items = pokedex.pokemon.filter((item) => {
      return item.name.indexOf('') > -1
    })

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(items),
      searchInput: ''
    };
  }

  filter() {
    console.log(this)

    const items = pokedex.pokemon.filter((item) => {
      return item.name.indexOf(this.state.searchInput) > -1
    })

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.setState({ dataSource: ds.cloneWithRows(items)})

  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./pokedex.png')}/>

        <Text style={styles.welcome}>
         Welcome to Derreck's Pokedex!
        </Text>

        <Text style={styles.instructions}>
        To get started, type in a filter!
        </Text>

        <View style = {styles.container1}>
          <TextInput 
          style = {styles.searchInput} 
          placeholder = '  Insert Text'
          onChangeText={(text) => this.setState({searchInput: text })}
          autoCorrect={false}
          />
          <TouchableHighlight style = {styles.button} underlayColor = '#4E98EA' onPress = {() => {this.filter()}}>
            <Text style = {styles.buttonText}>Search</Text>
          </TouchableHighlight>
        </View>
  
        <View style={styles.data}>

          <ListView
            dataSource={this.state.dataSource}
            style = {{flex: 1, alignSelf: 'stretch' }}
            renderRow={(rowData) => {
              return (
              <View style = {styles.dataItem}>
                <Text>{rowData.name}</Text>
                <Text>{rowData.type.map((item) => {
                  return item + ',';
                })}
                </Text>
                <Image
                  style = {{width: 100, height: 100}}
                  source={{uri: rowData.img}}
                />
              </View>
              )
            }}
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
      flex: 1,
      flexDirection: 'column'
    },
    dataItem: {
      flex: 0.3,
    }
  });

  AppRegistry.registerComponent('Pokedex', () => Pokedex);
