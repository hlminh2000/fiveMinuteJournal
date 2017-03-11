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
    return (
        <View style={{height:50, justifyContent:'center'}}>
          <Button transparent onPress={()=>{
              // this.refs.appDrawer._drawer._root.open()
              this.props.navigation.navigate('DrawerOpen')
            }}>
            <Icon name='menu' style={{color:'darkgrey'}}/>
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
