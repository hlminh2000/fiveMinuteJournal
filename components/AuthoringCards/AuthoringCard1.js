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
import TabNavigator from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from '../NavBar/NavBar.js';

export default class AuthoringCard1 extends Component{

  constructor(props){
    super(props);
    this.state = {
      isFocused: false,
    }
  }

  setCardFocused(){
    this.setState({
      ...this.state,
      isFocused: true,
    });
  }

  setCardUnfocused(){
    this.setState({
      ...this.state,
      isFocused: false,
    });
  }

  render(){
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

        <View style={{backgroundColor: 'white', marginTop:-30, marginBottom: 10, paddingTop: 0, paddingBottom: 20, flex: 1}}>
          <View style={{marginTop: 5, marginBottom: 5, flex: 5, alignItems:'center', justifyContent: 'center'}}>
            <View style={{width:300, paddingTop: 15}}>
              <Text style={{fontSize: 22, color: '#FF4E50'}}>1</Text>
              <TextInput
                // onFocus={this.setCardFocused.bind(this)}
                // onEndEditing={this.setCardUnfocused.bind(this)}
                onChangeText={()=>{ console.log("typing!!!"); if(this.props.onInputChange) {this.props.onInputChange()}}}
                underlineColorAndroid='transparent'
                autoCapitalize='sentences'
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  // flex: 1,
                  color: 'rgba(0, 0, 0, 0.6)',
                  height: 40,
                }}/>
            </View>
            <View style={{width:300, paddingTop: 15}}>
              <Text style={{fontSize: 22, color: '#FF4E50'}}>2</Text>
              <TextInput
                // onFocus={this.setCardFocused.bind(this)}
                // onEndEditing={this.setCardUnfocused.bind(this)}
                onChangeText={()=>{ console.log("typing!!!"); if(this.props.onInputChange) {this.props.onInputChange()}}}
                underlineColorAndroid='transparent'
                autoCapitalize='sentences'
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  // flex: 1,
                  color: 'rgba(0, 0, 0, 0.6)',
                  height: 40,
                }}/>
            </View>
            <View style={{width:300, paddingTop: 15}}>
              <Text style={{fontSize: 22, color: '#FF4E50'}}>3</Text>
              <TextInput
                // onFocus={this.setCardFocused.bind(this)}
                // onEndEditing={this.setCardUnfocused.bind(this)}
                onChangeText={()=>{ console.log("typing!!!"); if(this.props.onInputChange) {this.props.onInputChange()}}}
                underlineColorAndroid='transparent'
                autoCapitalize='sentences'
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  // flex: 1,
                  color: 'rgba(0, 0, 0, 0.6)',
                  height: 40,
                }}/>
            </View>
          </View>
        </View>
      </Card>
    )
  }
}
