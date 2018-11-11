import React from 'react';
//TouchableHighlight component allows for customizable buttons
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
//createStackNavigator component allows for easy navigation between diffrenet states or screens of the app
import { createStackNavigator } from 'react-navigation';
import Main from './Main'
import Styles from './Styles'

//To be moved to a separate .js file
class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: ''};

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    var object = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    };

    fetch('https://sunhacks-marketplace.herokuapp.com/login', object)
    .then((response) => response.text())
    .then((responseData) => {
      // if(responseData != 'null')
        this.props.navigation.navigate('Main');
    })
    .catch(function(err) {});

  };

  render() {
    return (
      <View style={Styles.loginPage}>
        <Text style={Styles.title}>BACS</Text>
        <Text style={Styles.whiteText}>Email</Text>
        <TextInput style={Styles.textField} placeholder={"Insert Email"} onChangeText={email => this.setState({email})}></TextInput>
        <Text style={Styles.whiteText}>Password</Text>
        <TextInput style={Styles.textField} placeholder={"Insert Password"} onChangeText={password => this.setState({password})}></TextInput>
        <TouchableHighlight style={Styles.loginButton} onPress={this.handlePress} underlayColor={'#fff'}>
          <Text style={Styles.loginText}>Login</Text>
        </TouchableHighlight>
        <View style={{flex: 5}}></View>
      </View>
    )
  }
}

class CreateScreen extends React.Component {
  render () {
    return (
      <View style={Styles.createPage}>
        <Text style={Styles.title}>BACS</Text>
        <Text style={Styles.whiteText}>Name</Text>
        <TextInput style={Styles.textField} placeholder={"Insert Name"}></TextInput>
        <Text style={Styles.whiteText}>Email</Text>
        <TextInput style={Styles.textField} placeholder={"Insert Email"}></TextInput>
        <Text style={Styles.whiteText}>Password</Text>
        <TextInput style={Styles.textField} placeholder={"Insert Password"}></TextInput>
        <TouchableHighlight style={Styles.createButton} onPress={() => this.props.navigation.navigate('Main')} underlayColor={'grey'}>
          <Text>Login</Text>
        </TouchableHighlight>
        <View style={{flex: 5}}></View>
      </View>
    )
  }
}

const RootStack = createStackNavigator({
  Login: LoginScreen,
  Main: Main
},
{
  initialRouteName: 'Login',
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RootStack />
    );
  }
}
