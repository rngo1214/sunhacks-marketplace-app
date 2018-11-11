import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Styles from '../Styles'

export default class RentFeed extends React.Component {
  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => JSON.stringify(item._id)}
        data={[
          {
            "author": "Jimmy John",
            "title": "Cutting board and knives",
            "description": "I wanna make some sandwiches but I don't have any way to slice the veggies",
            "budget": "$2",
            "useDuration": "< 1 hr",
            "_id": {
              "Sold": "fjaklfdksaf"
            }
          },
          {
            "author": "Randy Ngo",
            "title": "Big bowl for cooking",
            "description": "I wanna make brownies but my bowl isn't big enough",
            "budget": "$5",
            "useDuration": "2 hr",
            "_id": {
              "Sold": "fjdklasfjkdh"
            }
          }
        ]}
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