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
import Calendar from 'react-native-calendar';
import ParallaxView from 'react-native-parallax-view';

export default class ListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      date  : new Date(),
    }
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date){
    this.setState({
      date  : date,
    });
  }

  render() {
    console.log(this.state);
    return (
      <ParallaxView
        backgroundSource = {{uri: 'http://digioh.com/blog/wp-content/uploads/2016/08/teaser.jpg'}}
        windowHeight={305}
        header={(
          <Calendar
            scrollEnabled={false}
            showControls={true}
            customStyle={{
              calendarContainer:{
                backgroundColor : 'rgba(0, 0, 0, 0)'
              },
              day: {
                color: 'white'
              },
              calendarHeading: {
                borderColor: 'rgba(0, 0, 0, 0)'
              },
              dayHeading: {
                color: 'white'
              },
              controlButtonText: {
                color: 'white'
              },
              title: {
                color: 'white'
              },
              weekendDayText: {
                color: 'darkgrey'
              },
              weekendHeading: {
                color: 'darkgrey'
              }
            }}/>
        )}>

        {/* <ScrollView
          style={{position:'absolute', height:1000}}
          pointerEvents='none'> */}

          {/* <Image
            source={{uri: 'http://digioh.com/blog/wp-content/uploads/2016/08/teaser.jpg'}}
            style={{height: 305}}>
            <View style={{backgroundColor:'#000000'+'26', height:305}}> */}
              {/* <CalendarPicker
                textStyle     =   {{color:'white'}}
                selectedDate  =   {this.state.date}
                onDateChange  =   {this.onDateChange}
                screenWidth   =   {Dimensions.get('window').width}
                selectedBackgroundColor={'#a9a9a9'} /> */}

            {/* </View>
          </Image> */}

          <View style={{backgroundColor:'white'}}
            pointerEvents='none'>
            <List>

              <ListItem>
                <Icon name="ios-sunny-outline"/>
                <View style={{marginLeft:15}}>
                  <View><Text style={{fontSize:18, color:'darkgrey'}}>What I am grateful for?</Text></View>
                  <Text>1) The color of my beautiful eyes</Text>
                  <Text>2) My perfect wave hair</Text>
                  <Text>3) How awesome I am</Text>
                </View>
              </ListItem>

              <ListItem>
                <Icon name="ios-sunny-outline"/>
                <View style={{marginLeft:15}}>
                  <View><Text style={{fontSize:18, color:'darkgrey'}}>What would make today great?</Text></View>
                  <Text>1) Finish my project</Text>
                  <Text>2) Submit my application</Text>
                  <Text>3) Go to the gym</Text>
                </View>
              </ListItem>

              <ListItem>
                <Icon name="ios-sunny-outline"/>
                <View style={{marginLeft:15}}>
                  <View><Text style={{fontSize:18, color:'darkgrey'}}>Daily Affirmation. I am...</Text></View>
                  <Text>The strongest version of myself</Text>
                </View>
              </ListItem>

              <ListItem>
                <Icon name="ios-moon"/>
                <View style={{marginLeft:15}}>
                  <View><Text style={{fontSize:18, color:'darkgrey'}}>3 Amazing things that happened today</Text></View>
                  <Text>1) I was a mentor at a major hackathon</Text>
                  <Text>2) I am building my first mobile app</Text>
                  <Text>3) I was almost a judge</Text>
                </View>
              </ListItem>

              <ListItem>
                <Icon name="ios-moon"/>
                <View style={{marginLeft:15}}>
                  <View><Text style={{fontSize:18, color:'darkgrey'}}>How Could I have made today better</Text></View>
                  <Text>Go to the gym...</Text>
                </View>
              </ListItem>

            </List>
          </View>
        {/* </ScrollView> */}
      </ParallaxView>
    );
  }
}
