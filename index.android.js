import React, { Component } from 'react';
import { AppRegistry, BackAndroid } from 'react-native';
import { StyleProvider } from 'native-base';
import { addNavigationHelpers } from 'react-navigation';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index.js';
import AppNavigator from './components/Navigator/AppNavigator.js';
import * as firebase from 'firebase';

import API_ACCOUNTS from './configs/API_ACCOUNTS.json';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const firebaseApp = firebase.initializeApp(API_ACCOUNTS.FIREBASE);
var provider = new firebase.auth.FacebookAuthProvider();

export default class fiveMJournalNative extends Component {

  constructor(props){
    super(props);
    BackAndroid.addEventListener("hardwareBackPress", () => {
      console.log("store.getState().hardwareBackButtonEnabled");
      return !store.getState().hardwareBackButtonEnabled;
    })
  }

  render() {
    console.log(firebaseApp.auth());
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(platform)}>
          <AppNavigator/>
        </StyleProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('fiveMJournalNative', () => fiveMJournalNative);
