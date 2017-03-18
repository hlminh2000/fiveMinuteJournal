import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Container,
  Card
} from 'native-base';
import NavBar from '../NavBar/NavBar.js'

export default class AuthoringPage3 extends Component{
  static navigationOptions = {
    title: 'Life',
  }

  static defaultProp = {
    navigation : null,
    backgroundColor: '#F8FFAE',
  }

  render(){
    return (
      <Container>
        {/* <NavBar
          title='What I am grateful about'
          navigation={this.props.navigation}
          backgroundColor={'rgba(60,220,80,1)'}></NavBar> */}
        <View
          style={{
            alignItems:'center',
            flex:1,
            backgroundColor: 'rgba(60,220,80,1)'
          }}>
          <View><Text>1) This is it!!!</Text></View>
          <View><Text>2) This is it!!!</Text></View>
          <View><Text>3) This is it!!!</Text></View>
        </View>
      </Container>
    )
  }
}
