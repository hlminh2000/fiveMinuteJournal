

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {
  Container,
  Card
} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


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

  renderFirstCard(){
    return (
      <Card style={{borderRadius:5}}>
        <LinearGradient
          colors={['#FF4E50', '#F9D423']}
          start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
          style={{height:150, borderRadius: 5}}>
          <LinearGradient
            colors={
              (()=>{
                function pushColor (colorArray, length) {
                  colorArray.push('rgba(0, 0, 0, 0)')
                  if(colorArray.length < length) {pushColor(colorArray, length)}
                  return colorArray;
                };
                var output = pushColor([], 4);
                output.push('rgba(0, 0, 0, 0.4)');
                return output;
              })()
            }
            style={{
              height: 1,
              flex: 1}}/>
          <Text style={{
            position:'absolute',
            left: 10,
            bottom:40,
            color:'white',
            fontSize: 24
          }}>What I am grateful for...</Text>
        </LinearGradient>

        <View style={{backgroundColor: 'white', marginTop:-30, marginBottom: 10, paddingTop: 0, paddingBottom: 20}}>
          <View style={{marginTop: 5, marginBottom: 5, flex: 5, alignItems:'center'}}>
            <View style={{width:300, paddingTop: 15}}>
              <Text style={{fontSize: 22, color: '#FF4E50'}}>1</Text>
              <TextInput
                underlineColorAndroid='transparent'
                autoCapitalize='sentences'
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  fontSize: 18,
                  fkex: 1,
                  color: 'rgba(0, 0, 0, 0.6)',
                  height: 40,
                }}/>
            </View>
            <View style={{width:300, paddingTop: 15}}>
              <Text style={{fontSize: 22, color: '#FF4E50'}}>2</Text>
              <TextInput
                underlineColorAndroid='transparent'
                autoCapitalize='sentences'
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  fontSize: 18,
                  fkex: 1,
                  color: 'rgba(0, 0, 0, 0.6)',
                  height: 40,
                }}/>
            </View>
            <View style={{width:300, paddingTop: 15}}>
              <Text style={{fontSize: 22, color: '#FF4E50'}}>3</Text>
              <TextInput
                underlineColorAndroid='transparent'
                autoCapitalize='sentences'
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  fontSize: 18,
                  fkex: 1,
                  color: 'rgba(0, 0, 0, 0.6)',
                  height: 40,
                }}/>
            </View>
          </View>
        </View>
      </Card>
    )
  }

  render(){
    return (
      <Container style={{backgroundColor: 'white'}}>

        <View style = {{height: 3, width: Dimensions.get('window').width/3, backgroundColor: '#FF4E50'}}></View>

        <ScrollView style={{alignItems:'center'}}>

          <View style={{
              flex: 1,
              flexDirection:'row',
              paddingTop: 20,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10}}>
            <Image
              source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg'}}
              style={{height: 60, width: 60, borderRadius:50}}
            />
          <View style={{flex: 1, paddingLeft: 10}}>
              <Text style={{fontSize: 18, color: 'rgba(0, 0, 0, 0.3)',fontStyle:'italic'}}>
                Stay hungry, stay foolish.
              </Text>
              <Text style={{fontSize: 18, color: 'rgba(0, 0, 0, 0.3)',fontStyle:'italic', position: 'absolute', bottom: 0, right: 0}}>
                - Steve Jobs -
              </Text>
            </View>
          </View>

          <View style={{flex:5, width: 340}}>
            {this.renderFirstCard.bind(this)()}
          </View>

        </ScrollView>

        <ActionButton
          onPress={() => { this.goToNextPage.bind(this) }}
          icon={<Icon name="ios-arrow-forward" style={{color: 'white', fontSize: 20}}/>}
          buttonColor={'#FF4E50'}>
        </ActionButton>
      </Container>
    )
  }
}
