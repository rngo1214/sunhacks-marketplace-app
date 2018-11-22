import React from 'react';
import validator from 'validator';
import { AsyncStorage } from 'react-native';

//TouchableHighlight component allows for customizable buttons
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
//createStackNavigator component allows for easy navigation between diffrenet states or screens of the app
import { createStackNavigator } from 'react-navigation';
import Main from './Main'
import Styles from './Styles'

//To be moved to a separate .js file
class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '', staySignedIn: true};

    this.handlePress = this.handlePress.bind(this);
  }

  componentWillMount(){
    AsyncStorage.clear();
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        if(stores != undefined && stores.length > 0){
          this.setState({
            email: stores.email,
            password: stores.password
          })
          this.handlePress();
        }
      });
    });
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
      if(true || responseData != 'null'){
        // if (this.state.staySignedIn)
        //   AsyncStorage.multiSet([['email', 'password'],[this.state.email,this.state.password]]);
        this.props.navigation.navigate('Main');
      }
      else{
        this.setState({error: 'invalid login'});
      }
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
        <CheckBox title='Keep me logged in'
          checked={this.state.staySignedIn}
          onPress={()=>this.setState({staySignedIn: !this.state.staySignedIn})}
          containerStyle={{backgroundColor: 'teal', borderColor: 'teal'}}
          textStyle={{color: 'white'}}
          uncheckedColor='white'
          checkedColor='white'
        />
        <TouchableOpacity style={{height: 20}} onPress={()=>this.props.navigation.navigate('Create')}>
          <Text style={Styles.linkText}>Don't have an account?</Text>
        </TouchableOpacity>
        <View style={{flex: 4}}></View>
      </View>
    )
  }
}

class CreateScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
    };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    this.setState({emailError: false});
    if(this.state.name == '' || this.state.email == '' || this.state.password == '')
      this.setState({error: 'Please fill all fields'});
    else if(!this.state.email.endsWith('.edu'))
      this.setState({error: 'Please use a .edu email'});
    else if(!validator.isEmail(this.state.email))
      this.setState({error: 'Improperly formatted email'});
    else{
      var object = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          name: this.state.name,
          email: this.state.email.toLowerCase(),
          password: this.state.password
        })
      };

      fetch('https://sunhacks-marketplace.herokuapp.com/createAcct', object)
      .then((response) => response.text())
      .then((responseData) => {
        this.setState({error: responseData});
        if(responseData == '')
          this.props.navigation.navigate('Login');
      })
      .catch(function(err) {});
    }
  }

  render () {
    return (
      <View style={Styles.createPage}>
        <Text style={Styles.title}>BACS</Text>
        <Text style={Styles.whiteText}>Name</Text>
        <TextInput style={Styles.textField} placeholder={"Insert Name"} onChangeText={input => this.setState({name: input.trim()})}></TextInput>
        <Text style={Styles.whiteText}>Email</Text>
        <TextInput style={Styles.textField} placeholder={"Insert Email"} onChangeText={input => this.setState({email: input.trim()})}></TextInput>
        <Text style={Styles.whiteText}>Password</Text>
        <TextInput style={Styles.textField} placeholder={"Insert Password"} onChangeText={input => this.setState({password: input.trim()})}></TextInput>
        <TouchableHighlight style={Styles.loginButton} onPress={/*() => this.props.navigation.navigate('Main')*/this.handlePress} underlayColor={'#fff'}>
          <Text style={Styles.loginText}>Login</Text>
        </TouchableHighlight>
        <View style={{flex: 5}}>
          <Text style={Styles.redText}>{this.state.error}</Text>
        </View>
      </View>
    )
  }
}

const RootStack = createStackNavigator({
  Create: CreateScreen,
  Login: LoginScreen,
  Main: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  }
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
