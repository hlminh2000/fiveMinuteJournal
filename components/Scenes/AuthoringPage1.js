

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  Container,
  Card
} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import LinearGradient from 'react-native-linear-gradient';

import NavBar from '../NavBar/NavBar.js'

export default class AuthoringPage1 extends Component{
  static navigationOptions = {
    title: 'Life',
  }

  static defaultProp = {
    navigation : null,
    backgroundColor: '#F8FFAE',
  }

  goToNextPage(){
    console.log("asdgosnfon");
    this.props.navigation.navigate('q2');
  }

  render(){
    return (
      <Container>
        {/* <NavBar
          title='What I am grateful about'85D8CE
          navigation={this.props.navigation}
          backgroundColor={'rgba(60,220,80,1)'}></NavBar> */}
        <LinearGradient colors={['#85D8CE', '#085078']} style={{flex:1}}>
          <ScrollView
            style={{
              alignItems:'center',
              flex:1,
              // backgroundColor: 'rgba(60,220,80,1)'
            }}>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: 24,
                marginTop: 50,
                marginBottom: 20,
              }}>
              What I am grateful for:
            </Text>
            <View style={{paddingTop: 20, paddingBottom:20}}>
              <Text style={{color:'rgba(255, 255, 255, 0.7)', fontSize: 20}}>1</Text>
              <TextInput
                underlineColorAndroid='rgba(255, 255, 255, 0.5)'
                autoCapitalize='sentences'
                style={{
                  width: 300,
                  backgroundColor:'rgba(255, 255, 255, 0.1)',
                  color:'white',
                  fontSize: 18
                }}/>
            </View>
            <View style={{paddingTop: 20, paddingBottom:20}}>
              <Text style={{color:'rgba(255, 255, 255, 0.7)', fontSize: 20}}>2</Text>
              <TextInput
                underlineColorAndroid='rgba(255, 255, 255, 0.5)'
                autoCapitalize='sentences'
                style={{
                  width: 300,
                  backgroundColor:'rgba(255, 255, 255, 0.1)',
                  color:'white',
                  fontSize: 18
                }}/>
            </View>
            <View style={{paddingTop: 20, paddingBottom:20}}>
              <Text style={{color:'rgba(255, 255, 255, 0.7)', fontSize: 20}}>3</Text>
              <TextInput
                underlineColorAndroid='rgba(255, 255, 255, 0.5)'
                autoCapitalize='sentences'
                style={{
                  width: 300,
                  backgroundColor:'rgba(255, 255, 255, 0.1)',
                  color:'white',
                  fontSize: 18
                }}/>
            </View>
          </ScrollView>
        </LinearGradient>
        <ActionButton
          // buttonColor={ this.props.authoringEnabled ? 'rgba(60,220,80,1)' : 'rgba(200,200,200,1)' }/>
          onPress={() => { this.goToNextPage.bind(this) }}
          buttonColor={'#85D8CE'}/>
      </Container>
    )
  }
}
