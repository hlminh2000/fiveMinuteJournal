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

export default class JournalEntryEdit1 extends Component{
  static navigationOptions = {
    title: 'Life',
  }

  render(){
    return (
      <Container>
        <NavBar title='What I am grateful about' navigation={this.props.navigation}></NavBar>
        <View style={{alignItems:'center', flex:1}}>
          <Card style={{width: 340}}>
            <View><Text>1) This is it!!!</Text></View>
            <View><Text>2) This is it!!!</Text></View>
            <View><Text>3) This is it!!!</Text></View>
          </Card>
        </View>
      </Container>
    )
  }
}
