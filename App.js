import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.loginPage}>
        <Text>Temporary App Name</Text>
        <Text>Username</Text>
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
  }//,
  // loginPage: {
  //   flex: 3,
  //   backgroundColor: '#f47a42',
  //   alignItems: 'center',
  // },
  // whiteText: {
  //   color: '#fff'
  // },
  // textField: {
  //   color: '#fff',
  //   borderColor: 'grey',
  //   borderWidth: '1'
  // }
});
