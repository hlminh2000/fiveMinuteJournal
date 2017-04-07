import React, { Component } from 'react';
import AppNavigator from '../Navigator/AppNavigator.js';
import LoginNavigator from '../Navigator/LoginNavigator.js';


export default class Authenticator extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return ( this.props.isLoggedIn ? <AppNavigator/> : <LoginNavigator/> );
  }
}
