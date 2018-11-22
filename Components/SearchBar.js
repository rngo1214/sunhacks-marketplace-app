import React from 'react';
import { TextInput } from 'react-native'

import Styles from '../Styles.js'

export default class SearchBar extends React.Component{
  render(){
    return <TextInput placeholder='Search posts' style={Styles.searchBar}/>
  }
}
