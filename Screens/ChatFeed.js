import React from 'react';
import { Text, View, TextInput, Button, TouchableHighlight, FlatList } from 'react-native';
import Styles from '../Styles'

export default class ChatFeeds extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      messages: [],
    };
    this.onMessageSend = this.onMessageSend.bind(this);
  }
  onMessageSend() {
    if (this.state.input.length == 0) {
      return;
    }
    //const { input, messages } = this.state;
    //messages.push(input);
    let d = new Date();

    var object = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        timeStamp: d,
        text: this.state.input
      })
    };

    fetch('https://sunhacks-marketplace.herokuapp.com/addChat', object)
    .then(response =>{
      this.state.messages.push(JSON.parse(response._bodyInit))
      console.log(this.state.messages);
      
    })
    .catch(function(err) {
      console.log(err);
    });
    this.setState({input: ''});
    this.textInput.clear();
    this.forceUpdate();
  }

  componentDidMount(){
    var object = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    fetch('https://sunhacks-marketplace.herokuapp.com/getChat', object)
    .then((response) => {
      this.setState({
        messages: JSON.parse(response._bodyInit),
      })
      console.log(response);
      console.log('fsdfdsfdsfsdfsd' + this.state.messages);
    })
    .catch(function(err) {
      console.log(err);
    })
  };
  
  render() {
    return (
      <View style={Styles.chatContainer}>
        <View style={{flex: 7}}>
          <FlatList
            keyExtractor={(item, index) => JSON.stringify(item._id)}
            data={this.state.messages}
            renderItem = {({item}) => 
              <View style={Styles.chatBox}>
                <Text style={Styles.cardDescription}>{item.text}</Text>
              </View>
            }
            style={Styles.flexChat}
          />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
        }}>
          <TextInput style= {Styles.textField}
            onChangeText={(input) => this.setState({input})}
            ref={input => { this.textInput = input }}
          />
          <TouchableHighlight style={Styles.loginButton} onPress={this.onMessageSend} underlayColor={'#fff'}>
            <Text style={Styles.loginText}>Send Message</Text>
          </TouchableHighlight>
        </View>
      </View>
      );
    }
  }
  