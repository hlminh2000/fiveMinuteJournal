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
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

// import ParallaxScrollView from 'react-native-parallax-scroll-view';

const calendarStyle = {
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
}


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
    return (

      <ParallaxView
        backgroundSource = {{uri: 'http://digioh.com/blog/wp-content/uploads/2016/08/teaser.jpg'}}
        windowHeight={305}
        showsVerticalScrollIndicator = {false}
        header={(
          <Calendar
            scrollEnabled={false}
            showControls={true}
            customStyle={calendarStyle}/>
        )}>

        <View
          style={{
            backgroundColor:'white',
            height: 520,
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 10,
            shadowOffset: {
              height: -4,
              width: -4
            }
          }}
          pointerEvents='none'>
          <List>

            <ListItem>
              <Icon name="ios-sunny-outline"/>
              <View style={{marginLeft:15}}>
                <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>What I am grateful for?</Text></View>
                <Text>1) The color of my beautiful eyes</Text>
                <Text>2) My perfect wave hair</Text>
                <Text>3) How awesome I am</Text>
              </View>
            </ListItem>

            <ListItem>
              <Icon name="ios-sunny-outline"/>
              <View style={{marginLeft:15}}>
                <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>What would make today great?</Text></View>
                <Text>1) Finish my project</Text>
                <Text>2) Submit my application</Text>
                <Text>3) Go to the gym</Text>
              </View>
            </ListItem>

            <ListItem>
              <Icon name="ios-sunny-outline"/>
              <View style={{marginLeft:15}}>
                <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>Daily Affirmation. I am...</Text></View>
                <Text>The strongest version of myself</Text>
              </View>
            </ListItem>

            <ListItem>
              <Icon name="ios-moon"/>
              <View style={{marginLeft:15}}>
                <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>3 Amazing things that happened today</Text></View>
                <Text>1) I was a mentor at a major hackathon</Text>
                <Text>2) I am building my first mobile app</Text>
                <Text>3) I was almost a judge</Text>
              </View>
            </ListItem>

            <ListItem>
              <Icon name="ios-moon"/>
              <View style={{marginLeft:15}}>
                <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>How Could I have made today better</Text></View>
                <Text>Go to the gym...</Text>
              </View>
            </ListItem>

          </List>
        </View>
      </ParallaxView>

      // <ParallaxScrollView
      //   headerBackgroundColor="blue"
      //   contentBackgroundColor="pink"
      //   parallaxHeaderHeight={305}
      //   renderBackground = {()=>{
      //     <Image
      //       // style={{height: 305}}
      //       source={{uri: 'http://digioh.com/blog/wp-content/uploads/2016/08/teaser.jpg'}}/>
      //   }}
      //   renderParallaxHeader={() => (
      //     <Calendar
      //       scrollEnabled={false}
      //       showControls={true}
      //       customStyle={calendarStyle}/>
      //   )}>
      //   <View style={{backgroundColor:'white', height: 550}}
      //     pointerEvents='none'>
      //     <List>
      //
      //       <ListItem>
      //         <Icon name="ios-sunny-outline"/>
      //         <View style={{marginLeft:15}}>
      //           <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>What I am grateful for?</Text></View>
      //           <Text>1) The color of my beautiful eyes</Text>
      //           <Text>2) My perfect wave hair</Text>
      //           <Text>3) How awesome I am</Text>
      //         </View>
      //       </ListItem>
      //
      //       <ListItem>
      //         <Icon name="ios-sunny-outline"/>
      //         <View style={{marginLeft:15}}>
      //           <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>What would make today great?</Text></View>
      //           <Text>1) Finish my project</Text>
      //           <Text>2) Submit my application</Text>
      //           <Text>3) Go to the gym</Text>
      //         </View>
      //       </ListItem>
      //
      //       <ListItem>
      //         <Icon name="ios-sunny-outline"/>
      //         <View style={{marginLeft:15}}>
      //           <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>Daily Affirmation. I am...</Text></View>
      //           <Text>The strongest version of myself</Text>
      //         </View>
      //       </ListItem>
      //
      //       <ListItem>
      //         <Icon name="ios-moon"/>
      //         <View style={{marginLeft:15}}>
      //           <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>3 Amazing things that happened today</Text></View>
      //           <Text>1) I was a mentor at a major hackathon</Text>
      //           <Text>2) I am building my first mobile app</Text>
      //           <Text>3) I was almost a judge</Text>
      //         </View>
      //       </ListItem>
      //
      //       <ListItem>
      //         <Icon name="ios-moon"/>
      //         <View style={{marginLeft:15}}>
      //           <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>How Could I have made today better</Text></View>
      //           <Text>Go to the gym...</Text>
      //         </View>
      //       </ListItem>
      //
      //     </List>
      //   </View>
      // </ParallaxScrollView>

    );
  }
}
