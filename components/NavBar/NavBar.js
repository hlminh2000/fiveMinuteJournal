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
import LinearGradient from 'react-native-linear-gradient';

export default class NavBar extends Component {

  static defaultProp = {
    navigation: null,
    backgroundColor: 'white',
  }

  render(){
    const currentRoute = this.props.navigation.state.routeName;
    return (
      <View style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
        <View style={{height:50, justifyContent:'center', backgroundColor: this.props.backgroundColor || 'white'}}>
          <Button transparent onPress={()=>{
              // if(currentRoute == 'Home'){
                this.props.navigation.navigate('DrawerOpen')
              // } else {
              //   this.props.navigation.goBack();
              // }
            }}>
            <Icon name={
                'menu'
                // currentRoute == 'Home' ? 'menu' : 'ios-arrow-back'
              } style={{color:'darkgrey'}}/>
          </Button>
          <Text
            style ={{
              position: 'absolute',
              left: 60,
              fontSize: 18,
              color: 'darkgrey',
            }}>{this.props.title}
          </Text>
        </View>
        {/* <LinearGradient
          colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0)']}
          style={{height:2}}/> */}
        <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.01)'}}/>
      </View>
    )
  }

}
