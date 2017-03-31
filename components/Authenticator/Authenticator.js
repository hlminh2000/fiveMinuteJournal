import React, { Component } from 'react';
import AppNavigator from '../Navigator/AppNavigator.js';
import CON_LogInScreen from '../../containers/CON_LogInScreen.js';


export default class Authenticator extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return ( this.props.isLoggedIn ? <AppNavigator/> : <CON_LogInScreen/> );
  }
}
