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
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index.js';

import AppWrapper from './AppWrapper.js';

const store = createStore(reducers);


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

  renderScene(route, navigator){
    return (
      <AppWrapper
        route={route}
        navigator={navigator}
        title={route.title}>
        {
          (function(route, navigator){
            switch (route.link) {
              case 'my_journals':
                return <ListPage navigator={navigator}/>
                // break;
              case 'journal_edit_1':
                return (
                  <View
                    style={{
                      flex:1,
                      justifyContent:'center',
                      alignItems:'center',
                      backgroundColor:'white'
                    }}>
                    <Text>This will be the edit page 1!</Text>
                  </View>
                )
                // break;
              case 'setting_screen':
                return (
                  <View
                    style={{
                      flex:1,
                      justifyContent:'center',
                      alignItems:'center',
                      backgroundColor:'white'
                    }}>
                    <Text>This will be the setting page!</Text>
                  </View>
                )
                // break;
              default:
                return this.renderErrorPage();
            }
          })(route, navigator)
        }
      </AppWrapper>
    )
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
          <Navigator
            ref="navigator"
            initialRoute={{
              link: 'my_journals',
              title: 'My Journals',
              index: 0
            }}
            renderScene={this.renderScene.bind(this)}
          ></Navigator>
        </StyleProvider>
      // <Provider/>
    );
  }
}

AppRegistry.registerComponent('fiveMJournalNative', () => fiveMJournalNative);
