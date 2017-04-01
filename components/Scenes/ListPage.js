import React, { Component } from 'react';
import { Container } from 'native-base';
import StackNavigator from 'react-navigation';
import NavBar from '../NavBar/NavBar.js';
import Calendar from 'react-native-calendar';
import ParallaxView from 'react-native-parallax-view';
import ParallaxCalendarList from '../ParallaxCalendarList/ParallaxCalendarList.js';
import ActionButton from 'react-native-action-button';
import CON_ParallaxCalendarList from '../../containers/CON_ParallaxCalendarList.js';
import Moment from 'moment';

export default class ListPage extends Component {

  static navigationOptions = {
    title: 'My Journals',
  }

  static today = Moment().format('YYYY-MM-DD');

  static defaultProps = {
    ...Component.defaultProps,
    authoringEnabled: true,
    goToAuthoringPage: ()=>{},
  }

  constructor(props){
    super(props);
  }

  goToAuthoringPage(){
    // console.log(this.props.navigation.state);
    setTimeout(()=>{
      this.props.navigation.navigate('Authoring');
      this.props.goToAuthoringPage();
    }, 0);
  }

  render() {
    return (
      <Container>
        <NavBar title='My Journals' navigation={this.props.navigation}></NavBar>
        <CON_ParallaxCalendarList navigation={this.props.navigation}></CON_ParallaxCalendarList>
        <ActionButton
          // buttonColor={ this.props.authoringEnabled ? 'rgba(60,220,80,1)' : 'rgba(200,200,200,1)' }/>
          onPress={() => { if(this.props.authoringEnabled) this.goToAuthoringPage() }}
          buttonColor={ this.props.authoringEnabled ? 'rgba(67,198,172, 1)' : 'rgba(230,230,230,1)' }/>
      </Container>

    );
  }
}
