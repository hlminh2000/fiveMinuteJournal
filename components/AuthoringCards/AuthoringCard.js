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

export default class AuthoringCard extends Component{

  constructor(props){
    super(props);
    this.state = {
      isFocused: false,
    }
    this.onInputChange.bind(this);
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

  onInputChange(index, content){
    if (this.props.onInputChange){
      this.props.onInputChange(index, content);
    }
  }

  render(){

    const windowDimention = Dimensions.get('window');

    const indices = [];
    for (i = 0; i < this.props.inputCount; i++){
      indices.push(i);
    }

    console.log(this.props.originalEntry);

    return (
      <Card style={{borderRadius:5}}>
        <LinearGradient
          colors={['white', 'white']}
          start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
          style={{height:150, borderRadius: 5}}>
          <Text style={{
            position:'absolute',
            left: 20,
            // bottom:30,
            top:40,
            color:'darkgrey',
            fontSize: 22
          }}> {this.props.headerText} </Text>
        </LinearGradient>

        <View style={{backgroundColor: 'white', marginTop:-50, marginBottom: 10, paddingTop: 0, paddingBottom: 50, flex: 1}}>
          <View style={{marginTop: 0, marginBottom: 5, flex: 5, alignItems:'center', justifyContent: 'center'}}>

            {
              indices.map((index) => {
                return (
                  <View style={{width:windowDimention.width - 90, paddingTop: 30}}>
                    <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 30}}>
                      {
                        (()=>{
                          return !this.props.showIndex ? null : (
                            <Text style={{fontSize: 22, color: '#43C6AC', marginRight: 7}}>{ index+1 }</Text>
                          )
                        })()
                      }
                      <TextInput
                        onChangeText={ (content) => {this.onInputChange(index, content)} }
                        underlineColorAndroid='transparent'
                        autoCapitalize='sentences'
                        placeholder={this.props.originalEntry ? this.props.originalEntry[index] : ""}
                        style={{
                          textAlign: 'center',
                          fontSize: 18,
                          borderBottomColor: 'lightgrey',
                          borderBottomWidth: 0.5,
                          padding: 0,
                          height: 30,
                          color: 'rgba(0, 0, 0, 0.6)',
                          flex: 1,
                        }}/>
                    </View>
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
