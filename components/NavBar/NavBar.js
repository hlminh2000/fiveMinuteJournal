import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import {
  Button,
  Icon,
  Body,
  Right,
  Title,
} from 'native-base';

export default class NavBar extends Component {

  render(){
    const currentRoute = this.props.navigation.state.routeName;
    return (
        <View style={{height:50, justifyContent:'center'}}>
          <Button transparent onPress={()=>{
              if(currentRoute == 'Home'){
                this.props.navigation.navigate('DrawerOpen')
              } else {
                this.props.navigation.goBack();
              }
            }}>
            <Icon name={currentRoute == 'Home' ? 'menu' : 'ios-arrow-back'} style={{color:'darkgrey'}}/>
          </Button>
          <Text
            style ={{
              position: 'absolute',
              left: 60,
              fontSize: 18,
              color: 'darkgrey'
            }}>{this.props.title}</Text>
        </View>
    )
  }

}
