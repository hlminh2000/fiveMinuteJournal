import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  ListItem,
  Left,
  Right,
  Icon,
  Card,
  CardItem,
  List,
  Button,
  H3
} from 'native-base';
import StackNavigator from 'react-navigation';
import NavBar from '../NavBar/NavBar.js';
import Calendar from 'react-native-calendar';
import ParallaxView from 'react-native-parallax-view';
import ParallaxCalendarList from '../ParallaxCalendarList/ParallaxCalendarList.js';


const ListNavigator = StackNavigator({
  Home: {
    screen: ParallaxCalendarList,
  }
});
API


export default class ListPage extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (

      <Container>
        <NavBar title='My Journals' navigation={this.props.navigation}></NavBar>
        <ListNavigator/>
      </Container>

    );
  }
}
