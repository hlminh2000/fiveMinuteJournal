import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import {
  StatusBar,
} from 'react-native';
import {
  Container,
  ListItem,
  Left,
  Body,
  Right,
  Icon,
  Card,
  CardItem,
  List,
  Button,
  H3
} from 'native-base';
import ListSection from '../../common/ListSection.js';
import StackNavigator from 'react-navigation';
import NavBar from '../../NavBar/NavBar.js';
import Moment from 'moment';
import ProfileSection from './ProfileSection.js';
import CON_Settings_ProfileSection from '../../../containers/CON_Settings_ProfileSection.js';

import API from '../../../services/API.js';

export default class SettingsPage extends Component {

  static navigationOptions = {
    title: 'My Journals',
  }

  static today = Moment().format('YYYY-MM-DD');

  static defaultProps = {
    ...Component.defaultProps,
    firstName: "Minh",
    lastName: "Ha",
    email: "hlminh2000@gmail.com",
  }

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>

        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0.3)"
          barStyle="light-content"/>
        <NavBar title='Settings' navigation={this.props.navigation}></NavBar>
        <ScrollView>

          <CON_Settings_ProfileSection/>

          {/* <ListSection title="Notification"></ListSection> */}

        </ScrollView>
      </Container>

    );
  }
}
