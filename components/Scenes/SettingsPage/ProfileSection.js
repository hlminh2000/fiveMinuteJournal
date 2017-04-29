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
import Calendar from 'react-native-calendar';
import ParallaxView from 'react-native-parallax-view';
import ParallaxCalendarList from '../../ParallaxCalendarList/ParallaxCalendarList.js';
import ActionButton from 'react-native-action-button';
import CON_ParallaxCalendarList from '../../../containers/CON_ParallaxCalendarList.js';
import Moment from 'moment';
import API from '../../../services/API.js';

export default class ProfileSection extends Component {

  static navigationOptions = {
    title: 'My Journals',
  }

  static today = Moment().format('YYYY-MM-DD');

  static defaultProps = {
    ...Component.defaultProps,
    firstName: "",
    lastName: "",
    email: "",
  }

  constructor(props){
    super(props);
    this.state = {
      editingField: null,
    }
    this.endEditing = this.endEditing.bind(this);
    this.setEditingField = this.setEditingField.bind(this);
  }

  endEditing(){
    this.setState({
      ...this.state,
      editingField: null,
    });
  }

  onFirstNameInputEnd(e){
    API.updateUserFirstName(e.nativeEvent.text)
      .then(()=>{
        this.endEditing();
      })
      .catch((err) => {
        if(this.props.onFirstNameUpdateError){
          this.props.onFirstNameUpdateError(err)
        }
        this.endEditing();
      })
  }

  onLastNameInputEnd(e){
    API.updateUserLastName(e.nativeEvent.text)
      .then(()=>{
        this.endEditing();
      })
      .catch((err) => {
        if(this.props.onLastNameUpdateError){
          this.props.onLastNameUpdateError(err)
        }
        this.endEditing();
      })
  }

  onEmailInputEnd(e){
    const newEmail = e.nativeEvent.text;
    API.updateUserEmail(newEmail)
      .then(() => {
        if(this.props.onUserEmailUpdated){
          this.props.onUserEmailUpdated(newEmail);
        }
        this.endEditing();
      })
      .catch((err) => {
        if(this.props.onEmailUpdateError){
          this.props.onEmailUpdateError(err);
        }
        this.endEditing();
      })
  }

  setEditingField(fieldName){
    this.setState({
      ...this.state,
      editingField: fieldName,
    })
  }

  render() {
    const STYLE = {
      SM_BUTTON_GREY : {
        backgroundColor: '#43C6AC',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5,
      },
      SM_BUTTON_GREY_TEXT: {
        fontSize: 12
      },
      INPUT: {
        width: 100,
        padding: 5,
        textAlign: 'right',
      }
    }
    const shortenString = (str) => {
      return str.slice(0, 10) + (str.length > 15 ? "..." : "")
    }
    const maskString = (str) => {
      return str.split("").map(str => "•").join("").slice(0, 15)
    }
    return (
      <ListSection title="Profile">
        <List>
          <ListItem style={{paddingTop: 20, paddingBottom: 20}}>
            <Left><Text style={{fontSize: 16}}>First Name</Text></Left>
            <Body style={{alignItems:'flex-end'}}>
              {(()=>{
                if(this.state.editingField === "firstName"){return (
                    <TextInput
                      placeholder={this.props.firstName}
                      onEndEditing={this.onFirstNameInputEnd.bind(this)}
                      style={STYLE.INPUT}/>
                )} else {
                  return <Text style={{fontSize: 16}}>{shortenString(this.props.firstName)}</Text>
                }
              })()}
            </Body>
            {(()=>{
              if(this.state.editingField !== "firstName"){ return (
                  <Right>
                    <TouchableNativeFeedback onPress={()=>{ this.setEditingField("firstName") }}>
                      <Icon name="create" stlye={{color: 'lightgrey'}}/>
                    </TouchableNativeFeedback>
                  </Right>
              )} else {
                return null
              }
            })()}
          </ListItem>
          <ListItem style={{paddingTop: 20, paddingBottom: 20}}>
            <Left><Text style={{fontSize: 16}}>Last Name</Text></Left>
            <Body style={{alignItems:'flex-end'}}>
              {(()=>{
                if(this.state.editingField === "lastName"){return (
                    <TextInput
                      placeholder={this.props.lastName}
                      onEndEditing={this.onLastNameInputEnd.bind(this)}
                      style={STYLE.INPUT}/>
                )} else {
                  return <Text style={{fontSize: 16}}>{shortenString(this.props.lastName)}</Text>
                }
              })()}
            </Body>
            {(()=>{
              if(this.state.editingField !== "lastName"){ return (
                  <Right>
                    <TouchableNativeFeedback onPress={()=>{ this.setEditingField("lastName") }}>
                      <Icon name="create" stlye={{color: 'lightgrey'}}/>
                    </TouchableNativeFeedback>
                  </Right>
              )} else {
                return null
              }
            })()}
          </ListItem>
          <ListItem style={{paddingTop: 20, paddingBottom: 20}}>
            <Left><Text style={{fontSize: 16}}>Email</Text></Left>
            <Body style={{alignItems:'flex-end'}}>
              {(()=>{
                if(this.state.editingField === "email"){return (
                    <TextInput
                      placeholder={this.props.email}
                      onEndEditing={this.onEmailInputEnd.bind(this)}
                      style={STYLE.INPUT}/>
                )} else {
                  return <Text style={{fontSize: 16}}>{shortenString(this.props.email)}</Text>
                }
              })()}
            </Body>
            {(()=>{
              if(this.state.editingField !== "email"){ return (
                  <Right>
                    <TouchableNativeFeedback onPress={()=>{ this.setEditingField("email") }}>
                      <Icon name="create" stlye={{color: 'lightgrey'}}/>
                    </TouchableNativeFeedback>
                  </Right>
              )} else {
                return null
              }
            })()}
          </ListItem>
        </List>
      </ListSection>
    );
  }
}
