import React from 'react';
import { Text, View, TextInput, Button, TouchableHighlight, FlatList } from 'react-native';
import Styles from '../Styles'
export default class ChatFeeds extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
    this.onMessageSend = this.onMessageSend.bind(this)
  }
  onMessageSend() {
    //const { input, messages } = this.state;
    this.state.messages.push(this.state.input);
    //messages.push(input);
  }
  
  render() {
    return (
      <View style={Styles.chatContainer}>
        <FlatList
          data={this.state.messages}
          renderItem = {({item}) => <Text>{item}</Text>}
          style={{
            backgroundColor: 'red',
            flex: 10,
            width: 500,
          }}
        />
        <TextInput style= {Styles.textField}
          onChangeText={(input) => this.setState({input})}
        />
        <TouchableHighlight style={Styles.loginButton} onPress={this.onMessageSend} underlayColor={'grey'}>
          <Text style={Styles.loginText}>Send Message</Text>
        </TouchableHighlight>
      </View>
      );
    }
  }
  