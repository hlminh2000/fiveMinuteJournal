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
import LoginNavigator from './components/Navigator/LoginNavigator.js';
import CON_Authenticator from './containers/CON_Authenticator.js';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */


export default class fiveMJournalNative extends Component {

  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(platform)}>
          <CON_Authenticator/>
        </StyleProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('fiveMJournalNative', () => fiveMJournalNative);
