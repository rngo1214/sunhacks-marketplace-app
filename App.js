import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

//Dimensions component gets the screen dimensions of the current device
//Declared width and height variables to work with
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      field1: 'Insert Username', 
      field2: 'Insert Password', 
      text1: 'Insert Username', 
      text2: 'Insert Password' };
  }

  render() {
    return (
      <View style={styles.loginPage}>
        <Text style={styles.title}>Temporary App Name</Text>
        <Text style={styles.whiteText}>Username</Text>
        <TextInput style={styles.textField} onChangeText={(text1) => this.setState({text1})} placeholder={this.state.field1}></TextInput>
        <Text style={styles.whiteText}>Password</Text>
        <TextInput style={styles.textField} onChangeText={(text2) => this.setState({text2})} placeholder={this.state.field2}></TextInput>
        <View style={{flex: 10}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginPage: {
    paddingTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#f47a42',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: '#fff',
    marginTop: 20,
    marginBottom: 0,
    fontSize: 24,
    fontWeight: 'bold',
  },
  whiteText: {
    flex: 1,
    color: '#fff',
    marginTop: 20,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textField: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    width: width - (width / 10),
    borderWidth: 1,
    borderColor: 'grey'
  }
});
