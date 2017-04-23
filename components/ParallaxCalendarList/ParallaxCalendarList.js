import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
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
import LinearGradient from 'react-native-linear-gradient';
import Calendar from 'react-native-calendar';
import ParallaxView from 'react-native-parallax-view';
import Moment from 'moment';
import NavBar from '../NavBar/NavBar.js'

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
  },
  eventIndicator: {
    backgroundColor: 'blue',
    width: 10,
    height: 10,
  },
}


export default class ParallaxCalendarList extends Component {

  static today = Moment().format('YYYY-MM-DD');

  static defaultProps = {
    ...Component.defaultProps,
    selectedDate        : this.today,
    today               : this.today,
    navigation          : null,
    calendarStartDate   : Moment().startOf('month').format('YYYY-MM-DD'),
    currentJournalEntry    : null,
    onDateSelect        : (date) => {},
    onNextMonthPress    : () => {},
    onPrevMonthPress    : () => {},
    onComponentDidMount : () => {},
  }

  constructor(props){
    super(props);
    this.goToEditPage1 = this.goToEditPage1.bind(this);
  }

  componentDidMount(){
    if(this.props.onComponentDidMount){
      this.props.onComponentDidMount();
    }
  }

  onDateSelect(date){
    this.props.onDateSelect(Moment(date).format('YYYY-MM-DD'));
  }

  onNextMonthPress(){
    if(this.props.onNextMonthPress){
      this.props.onNextMonthPress()
    }
  }

  onPrevMonthPress(){
    if(this.props.onPrevMonthPress){
      this.props.onPrevMonthPress()
    }
  }

  goToEditPage1(){
    this.props.navigation.navigate('Edit1');
  }

  render() {
    return (
        <ParallaxView
          backgroundSource = {{uri: 'https://firebasestorage.googleapis.com/v0/b/mjournal-6d19f.appspot.com/o/skyscrapers-246224_1920.jpg?alt=media&token=61c45321-b324-4862-a2ed-406e4bbf6fe3'}}
          windowHeight={305}
          showsVerticalScrollIndicator = {false}
          header={(
            <View>
              <LinearGradient
                // colors={['rgba(67,198,172, 0.7)', 'rgba(248,255,174, 0.7)']}
                colors={['rgba(67,198,172, 1)', 'rgba(67,198,172, 1)']}
                start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
                style={{height:305, alignItems:'center'}}>
                <Calendar
                  scrollEnabled={false}
                  showControls={true}
                  customStyle={calendarStyle}
                  onDateSelect={this.onDateSelect.bind(this)}
                  onTouchNext={this.onNextMonthPress.bind(this)}
                  onTouchPrev={this.onPrevMonthPress.bind(this)}
                  startDate={this.props.calendarStartDate}
                  eventDates={['2017-04-02']}
                  selectedDate={this.props.selectedDate}/>
              </LinearGradient>
            </View>
          )}>

          <View
            style={{
              backgroundColor:'#fafafa',
              paddingTop: 5,
              paddingBottom: 5
            }}>

            <View style={{alignItems:'center', marginTop:5, marginBottom:5}}>
              <Card style={{width: 340, borderRadius: 5}}>
                {
                  (()=>{
                    if(
                      true
                      // this.props.currentJournalEntry && (
                      //   this.props.currentJournalEntry.q1[0] && this.props.currentJournalEntry.q1[1] && this.props.currentJournalEntry.q1[2] &&
                      //   this.props.currentJournalEntry.q2[0] && this.props.currentJournalEntry.q2[1] && this.props.currentJournalEntry.q2[2] &&
                      //   this.props.currentJournalEntry.q3[0] && this.props.currentJournalEntry.q3[1] && this.props.currentJournalEntry.q3[2]
                      // )
                    ){ return (
                      <List style={{paddingBottom:10}}>
                        <ListItem style={{paddingTop: 20, paddingBottom: 25}} onPress={this.goToEditPage1.bind(this)}>
                          <View style={{marginLeft:15}}>
                            <View style={{width:250, paddingBottom: 5}}><Text style={{fontSize:18, color:'darkgrey'}}>What I am grateful for?</Text></View>
                            <Text style={{paddingTop: 5, paddingBottom: 5}}>1) {(this.props.currentJournalEntry && this.props.currentJournalEntry.q1[0]) ? this.props.currentJournalEntry.q1[0] : "My beautiful eyes"}</Text>
                            <Text style={{paddingTop: 5, paddingBottom: 5}}>2) {(this.props.currentJournalEntry && this.props.currentJournalEntry.q1[1]) ? this.props.currentJournalEntry.q1[1] : "My beautiful eyes"}</Text>
                            <Text style={{paddingTop: 5, paddingBottom: 5}}>3) {(this.props.currentJournalEntry && this.props.currentJournalEntry.q1[2]) ? this.props.currentJournalEntry.q1[2] : "My beautiful eyes"}</Text>
                          </View>
                          <Icon style={{right: -30, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                        </ListItem>

                        <ListItem style={{paddingTop: 20, paddingBottom: 25}}>
                          <View style={{marginLeft:15}}>
                            <View style={{width:250, paddingBottom: 5}}><Text style={{fontSize:18, color:'darkgrey'}}>What would make today great?</Text></View>
                            <Text style={{paddingTop: 5, paddingBottom: 5}}>1) {(this.props.currentJournalEntry && this.props.currentJournalEntry.q2[0]) ? this.props.currentJournalEntry.q2[0] : "My beautiful eyes"}</Text>
                            <Text style={{paddingTop: 5, paddingBottom: 5}}>2) {(this.props.currentJournalEntry && this.props.currentJournalEntry.q2[1]) ? this.props.currentJournalEntry.q2[1] : "My beautiful eyes"}</Text>
                            <Text style={{paddingTop: 5, paddingBottom: 5}}>3) {(this.props.currentJournalEntry && this.props.currentJournalEntry.q2[2]) ? this.props.currentJournalEntry.q2[2] : "My beautiful eyes"}</Text>
                          </View>
                          <Icon style={{right: -30, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                        </ListItem>

                        <ListItem style={{paddingTop: 20, paddingBottom: 25}}>
                          <View style={{marginLeft:15}}>
                            <View style={{width:250, paddingBottom: 5}}><Text style={{fontSize:18, color:'darkgrey'}}>Daily Affirmation. I am...</Text></View>
                            <Text style={{paddingTop: 5, paddingBottom: 5}}>{(this.props.currentJournalEntry && this.props.currentJournalEntry.q3[0]) ? this.props.currentJournalEntry.q3[0] : "The strongest version of myself"}</Text>
                          </View>
                          <Icon style={{right: -30, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                        </ListItem>
                      </List>
                    )} else { return (
                      <View style={{alignItems: 'center', paddingTop: 30, paddingBottom: 30}}>
                        <Text style={{paddingTop: 5, paddingBottom: 5}}> No journal  </Text>
                      </View>
                    )}
                  })()
                }
              </Card>
            </View>

            <View style={{alignItems:'center', marginTop:5, marginBottom:5}}>
              <Card style={{width: 340, borderRadius: 5}}>
                <List>

                  <ListItem style={{paddingTop: 20, paddingBottom: 25}}>
                    <View style={{marginLeft:15}}>
                      <View style={{width:250, paddingBottom: 5}}><Text style={{fontSize:18, color:'darkgrey'}}>3 Amazing things that happened today</Text></View>
                      <Text style={{paddingTop: 5, paddingBottom: 5}}>1) I was a mentor at a major hackathon</Text>
                      <Text style={{paddingTop: 5, paddingBottom: 5}}>2) I am building my first mobile app</Text>
                      <Text style={{paddingTop: 5, paddingBottom: 5}}>3) I was almost a judge</Text>
                    </View>
                    <Icon style={{right: -30, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                  </ListItem>

                  <ListItem style={{paddingTop: 20, paddingBottom: 25}}>
                    <View style={{marginLeft:15}}>
                      <View style={{width:250, paddingBottom: 5}}><Text style={{fontSize:18, color:'darkgrey'}}>How Could I have made today better</Text></View>
                      <Text>Go to the gym...</Text>
                    </View>
                    <Icon style={{right: -30, color:'rgba(0, 0, 0, 0.1)'}}name="ios-arrow-forward" />
                  </ListItem>

                </List>
              </Card>
            </View>
          </View>
        </ParallaxView>

    );
  }
}
