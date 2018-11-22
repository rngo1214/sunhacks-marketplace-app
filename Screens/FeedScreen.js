import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Styles from '../Styles'
import SearchbarHeader from '../Components/SearchbarHeader.js'

export default class FeedScreen extends React.Component {
  constructor(props){
    super(props);
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
        col: this.props.col,
        search: {}
      })
    };

    console.log(object)

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
        <SearchbarHeader/>
        <FlatList
          keyExtractor={(item,index) => JSON.stringify(item._id)}
          data={this.state.data}
          renderItem={({item}) =>
            <View style={Styles.cardContainer}>
              <View style={Styles.card}>
                {this.props.fields.map(field => {
                  return <Text key={field.name} style={Styles[field.style]}>{item[field.name]}</Text>
                })}
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
