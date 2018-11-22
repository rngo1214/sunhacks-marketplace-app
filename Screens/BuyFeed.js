import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Styles from '../Styles';
import SearchBarHeader from '../Components/SearchbarHeader'

export default class BuyFeed extends React.Component {
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
        col: 'buy-reqs',
        search: {}
      })
    };

    fetch('https://sunhacks-marketplace.herokuapp.com/getCards', object)
    .then((response) => {
      this.setState({
        data: JSON.parse(response._bodyInit)
      })
    })
    .catch(function(err) {})
  };

  render() {
    return (
      <View style={Styles.screen}>
        <SearchBarHeader/>
        <FlatList
          keyExtractor={(item,index) => JSON.stringify(item._id)}
          data={this.state.data}
          renderItem={({item}) =>
            <View style={Styles.cardContainer}>
              <View style={Styles.card}>
              <Text style={Styles.cardTitle}>{item.title}</Text>
              <Text style={Styles.cardAuthor}>{item.author}</Text>
              <Text style={Styles.cardDescription}>{item.description}</Text>
              <Text style={Styles.cardBudget}>Budget: {item.budget}</Text>
              </View>
            </View>
          }
          style={{
            backgroundColor: '#fff',
          }}
        />
      </View>
    )
  }
}
