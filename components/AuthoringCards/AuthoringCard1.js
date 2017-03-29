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

    const windowDimention = Dimensions.get('window');

    const indices = [];
    for (i = 0; i < this.props.inputCount; i++){
      indices.push(i);
    }

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
          }}> {this.props.headerText} </Text>
        </LinearGradient>

        <View style={{backgroundColor: 'white', marginTop:-30, marginBottom: 10, paddingTop: 0, paddingBottom: 20, flex: 1}}>
          <View style={{marginTop: 15, marginBottom: 5, flex: 5, alignItems:'center', justifyContent: 'center'}}>

            {
              indices.map((index) => {
                return (
                  <View style={{width:windowDimention.width - 80, paddingTop: 15}}>
                    {
                      (()=>{
                        return !this.props.showIndex ? null : (
                          <Text style={{fontSize: 22, color: '#43C6AC'}}>{ index+1 }</Text>
                        )
                      })()
                    }
                    <TextInput
                      // onFocus={this.setCardFocused.bind(this)}
                      // onEndEditing={this.setCardUnfocused.bind(this)}
                      onChangeText={()=>{ console.log("typing!!!"); if(this.props.onInputChange) {this.props.onInputChange()}}}
                      underlineColorAndroid='transparent'
                      autoCapitalize='sentences'
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.03)',
                        textAlign: 'center',
                        // flex: 1,
                        color: 'rgba(0, 0, 0, 0.6)',
                        height: 40,
                      }}/>
                  </View>
                )
              })
            }

          </View>
        </View>
      </Card>
    )
  }
}
