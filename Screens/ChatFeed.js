import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
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
      <View style={styles.container}>
        <FlatList
        data={this.state.messages}
         renderItem = {({item}) => <Text>{item}</Text>}
         style={{
           backgroundColor: 'red',
           flex: 5,
           width: 500,
         }}
         />
        <TextInput style= {Styles.textField}
        onChangeText={(input) => this.setState({input})}
        />
        <Button title='Send Message' onPress={this.onMessageSend} />
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
  flatList: {
        height: 50,
        backgroundColor: 'red'
      }
});
