import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import {
  Content,
  ListItem,
  Left,
  Right,
  Icon,
  Card,
  CardItem,
  List,
  H3
} from 'native-base';
import CalendarPicker   from "react-native-calendar-picker";


export default class ListPage extends Component {

  render() {
    return (
      <View>
        <Image
          source={{uri: 'http://digioh.com/blog/wp-content/uploads/2016/08/teaser.jpg'}}
          style={{height: 320}}>
          <View style={{backgroundColor:'#000000'+'26', height:320}}>
            <CalendarPicker
              textStyle     =   {{color:'white'}}
              selectedDate  =   {new Date()}
              onDateChange  =   {()=>{}}
              screenWidth   =   {Dimensions.get('window').width}
              selectedBackgroundColor={'#a9a9a9'} />
          </View>
        </Image>
        <ScrollView>
          <ListItem>
            <Icon name="ios-sunny-outline"></Icon>
            <View>
              <View><H3 style={{marginLeft:10, paddingBottom:5, color:'darkgrey'}}>What I am grateful for...</H3></View>
              <View><Text style={{marginLeft:10}}>1) What I am grateful for...</Text></View>
              <View><Text style={{marginLeft:10}}>2) What I am grateful for...</Text></View>
              <View><Text style={{marginLeft:10}}>3) What I am grateful for...</Text></View>
            </View>
          </ListItem>
          <ListItem>
            <Icon name="ios-sunny-outline"></Icon>
            <View>
              <View><H3 style={{marginLeft:10, paddingBottom:5, color:'darkgrey'}}>What would make today great</H3></View>
              <View><Text style={{marginLeft:10}}>What I am grateful for...</Text></View>
            </View>
          </ListItem>
          <ListItem>
            <Icon name="ios-sunny-outline"></Icon>
            <View><Text style={{marginLeft:10}}>"Daily affirmations"</Text></View>
          </ListItem>
          <ListItem>
            <Icon name="ios-sunny-outline"></Icon>
            <View><Text style={{marginLeft:10}}>"3 amazing things that happened today"</Text></View>
          </ListItem>
          <ListItem>
            <Icon name="ios-sunny-outline"></Icon>
            <View><Text style={{marginLeft:10}}>"How could you have made today better?"</Text></View>
          </ListItem>
        </ScrollView>
      </View>
    );
  }
}
