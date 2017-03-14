/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Container,
  Content,
  Title,
  StyleProvider
} from 'native-base';
import ListPage from './components/Scenes/ListPage.js';
import AppDrawer from './components/Drawer/AppDrawer.js';
import ParallaxCalendarList from './components/ParallaxCalendarList/ParallaxCalendarList.js';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index.js';
import AppWrapper from './AppWrapper.js';
import JournalEntryEdit1 from './components/EditPages/JournalEntryEdit1.js';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

const store = createStore(reducers);

const ListNavigator = StackNavigator({
  Home: {
    screen: ListPage,
  },
  Edit1: {
    screen: JournalEntryEdit1
  }
}, {
  headerMode: 'none',
});

const AppNavigator = DrawerNavigator({
  Journals: {
    screen: ListNavigator,
  }
}, {
  contentComponent: AppDrawer,
});

export default class fiveMJournalNative extends Component {

  constructor(props){
    super(props);
    this.renderErrorPage = this.renderErrorPage.bind(this);
  }

  componentWillMount(){
    Navigator.prototype.replaceWithAnimation = function (route) {
      const activeLength = this.state.presentedIndex + 1;
      const activeStack = this.state.routeStack.slice(0, activeLength);
      const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
      const nextStack = activeStack.concat([route]);
      const destIndex = nextStack.length - 1;
      const nextSceneConfig = this.props.configureScene(route, nextStack);
      const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

      const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
      this._emitWillFocus(nextStack[destIndex]);
      this.setState({
        routeStack: nextStack,
        sceneConfigStack: nextAnimationConfigStack,
      }, () => {
        this._enableScene(destIndex);
        this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
          this.immediatelyResetRouteStack(replacedStack);
        });
      });
    };
  }

  renderErrorPage(){
    return(
      <View
        style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Text>Something went wrong!</Text>
      </View>
    )
  }

  render() {

    const app = this;

    return (
      // <Provider store={store}>
        <StyleProvider style={getTheme(platform)}>
          <AppNavigator/>
        </StyleProvider>
      // <Provider/>
    );
  }
}

AppRegistry.registerComponent('fiveMJournalNative', () => fiveMJournalNative);
