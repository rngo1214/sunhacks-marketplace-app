import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import SearchBar from './SearchBar.js'
import PostCreatorButton from './PostCreatorButton.js'
import Styles from '../Styles.js'

export default class SearchbarHeader extends React.Component{
  render(){
    return (
      <View style={Styles.header}>
        <Icon name='search' color='#ccc' size={24}/>
        <SearchBar/>
        <PostCreatorButton/>
      </View>
    )
  }
}
