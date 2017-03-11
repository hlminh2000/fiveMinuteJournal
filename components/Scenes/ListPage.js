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
  Content,
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
import Calendar from 'react-native-calendar';
import ParallaxView from 'react-native-parallax-view';
// import LinearGradient from 'react-native-linear-gradient';

// import ParallaxScrollView from 'react-native-parallax-scroll-view';

const calendarStyle = {
  calendarContainer:{
    backgroundColor : 'rgba(0, 0, 0, 0)',
    width: 315
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
    color: 'white'
  },
  weekendHeading: {
    color: 'white'
  },
  monthContainer: {
    width: 315
  },
  dayButton: {
    width: 45,
  },
  dayButtonFiller: {
    width: 45
  }
}


export default class ListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      date  : new Date(),
      clicked: true,
    }
    this.onDateChange = this.onDateChange.bind(this);
    this.goToEditPage1 = this.goToEditPage1.bind(this);
  }

  onDateChange(date){
    this.setState({
      date  : date,
    });
  }

  goToEditPage1(){
    this.props.navigator.push({
      link: 'journal_edit_1',
      title: 'What I am grateful for',
      index: 1
    });
  }

  render() {
    return (

      <ParallaxView
        backgroundSource = {{uri: 'http://digioh.com/blog/wp-content/uploads/2016/08/teaser.jpg'}}
        windowHeight={305}
        showsVerticalScrollIndicator = {false}
        header={(
          <View>
            {/* <View style={{position:'absolute', height: 305, width: 3, right:0, backgroundColor:'rgba(20, 100, 100, 1)', bottom:0, }}></View> */}
            <View
              style={{
                alignItems: 'center',
                height: 305,
                backgroundColor: 'rgba(50, 255, 255, 0.3)'
              }}>
                <Calendar
                  scrollEnabled={false}
                  showControls={true}
                  customStyle={calendarStyle}/>
              </View>
          </View>
        )}>

        <View
          style={{
            backgroundColor:'white',
            paddingTop: 5,
            paddingBottom: 5
          }}>

          <View style={{alignItems:'center', marginTop:5, marginBottom:5}}>
            <Card style={{width: 340}}>
              <List style={{paddingBottom:10}}>
                  <ListItem style={{paddingTop: 20, paddingBottom: 25}} onPress={this.goToEditPage1.bind(this)}>
                    <Icon name="ios-sunny-outline" style={{color: 'rgba(0, 0, 0, 0.2)'}}/>
                    <View style={{marginLeft:15}}>
                      <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>What I am grateful for?</Text></View>
                      <Text>1) The color of my beautiful eyes</Text>
                      <Text>2) My perfect wave hair</Text>
                      <Text>3) How awesome I am</Text>
                    </View>
                    <Icon style={{right: -5, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                  </ListItem>

                <ListItem style={{paddingTop: 20, paddingBottom: 25}}>
                  <Icon name="ios-sunny-outline" style={{color: 'rgba(0, 0, 0, 0.2)'}}/>
                  <View style={{marginLeft:15}}>
                    <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>What would make today great?</Text></View>
                    <Text>1) Finish my project</Text>
                    <Text>2) Submit my application</Text>
                    <Text>3) Go to the gym</Text>
                  </View>
                  <Icon style={{right: -5, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                </ListItem>

                <ListItem style={{paddingTop: 20, paddingBottom: 25}}>
                  <Icon name="ios-sunny-outline" style={{color: 'rgba(0, 0, 0, 0.2)'}}/>
                  <View style={{marginLeft:15}}>
                    <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>Daily Affirmation. I am...</Text></View>
                    <Text>The strongest version of myself</Text>
                  </View>
                  <Icon style={{right: -5, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                </ListItem>
              </List>
            </Card>
          </View>

          <View style={{alignItems:'center', marginTop:5, marginBottom:5}}>
            <Card style={{width: 340}}>
              <List>

                <ListItem style={{paddingTop: 20, paddingBottom: 25}}>
                  <Icon name="ios-moon" style={{color:'rgba(0, 0, 0, 0.1)'}}/>
                  <View style={{marginLeft:15}}>
                    <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>3 Amazing things that happened today</Text></View>
                    <Text>1) I was a mentor at a major hackathon</Text>
                    <Text>2) I am building my first mobile app</Text>
                    <Text>3) I was almost a judge</Text>
                  </View>
                  <Icon style={{right: -5, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                </ListItem>

                <ListItem style={{paddingTop: 20, paddingBottom: 25}}>
                  <Icon name="ios-moon" style={{color:'rgba(0, 0, 0, 0.1)'}}/>
                  <View style={{marginLeft:15}}>
                    <View style={{width:250}}><Text style={{fontSize:18, color:'darkgrey'}}>How Could I have made today better</Text></View>
                    <Text>Go to the gym...</Text>
                  </View>
                  <Icon style={{right: -5, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                </ListItem>

              </List>
            </Card>
          </View>
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
