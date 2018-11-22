import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View, TextInput, Button, TouchableHighlight, FlatList } from 'react-native';
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
    })
    .then(()=>{
      this.setState({input: ''});
      this.textInput.clear();
      this.forceUpdate();
    })
    .catch(function(err) {
      console.log(err);
    });
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
    })
    .catch(function(err) {
      console.log(err);
    })
  };

  render() {
    return (
      <View style={Styles.screen}>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>Chat</Text>
        </View>
        <KeyboardAvoidingView style={Styles.chatContainer} behavior='position'>
          <View style={{flex: 9}}>
            <FlatList
              ref={ref => this.flatList = ref}
              onContentSizeChange={() => this.flatList.scrollToEnd({animated:true})}
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
            flexDirection: 'row',
            minHeight: 30,
            maxHeight: 80,
            padding: 10,
            borderTopColor: '#eee',
            borderTopWidth: 0.5,
            borderBottomColor: '#eee',
            borderBottomWidth: 0.5
          }}>
            <TextInput style= {Styles.messageInputField}
              onChangeText={(input) => this.setState({input})}
              ref={input => { this.textInput = input }}
              multiline={true}
              placeholder='Type here...'
            />
            <View style={{justifyContent: 'center'}}>
              <TouchableHighlight style={Styles.sendMessageButton} onPress={this.onMessageSend} underlayColor={'#fff'}>
                <Text style={Styles.sendMessageText}>Send</Text>
              </TouchableHighlight>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
      );
    }
  }
