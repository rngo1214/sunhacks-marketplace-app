import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Styles from '../Styles'

export default class RentFeed extends React.Component {
  constructor(){
    super();
    this.state={
      data: [],
    }
  }

  componentDidMount(){
    var object = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        col: 'rent-reqs',
        search: {}
      })
    };

    fetch('https://sunhacks-marketplace.herokuapp.com/getCards', object)
    .then((response) => {
      this.setState({
        data: JSON.parse(response._bodyInit)
      })
      console.log(this.state.data);
    })
    .catch(function(err) {})
  };

  render() {
    return (
      <FlatList
        keyExtractor={(item,index) => JSON.stringify(item._id)}
        data={this.state.data}
        renderItem={({item}) =>
          <View style={{marginTop: 15, alignItems: 'center'}}>
            <View style={Styles.card}>
            <Text style={Styles.cardTitle}>{item.title}</Text>
            <Text style={Styles.cardAuthor}>{item.author}</Text>
            <Text style={Styles.cardDescription}>{item.description}</Text>
            <Text style={Styles.cardBudget}>Budget: {item.budget}</Text>
            <Text style={Styles.cardDuration}>Duration: {item.useDuration}</Text>
            </View>
          </View>
        }
        style={{
          backgroundColor: '#fff',
        }}
      />
    )
  }
}
