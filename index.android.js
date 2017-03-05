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


export default class fiveMJournalNative extends Component {

  constructor(props){
    super(props);
    this.state = {
      title:"My Journals",
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <AppDrawer ref="appDrawer">
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={()=>{this.refs.appDrawer._drawer._root.open()}}>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>{this.state.title}</Title>
              </Body>
              <Right />
            </Header>

            {/* <ListPage></ListPage> */}
            <Navigator
              initialRoute={{ title: 'My Initial Scene', index: 0 }}
              renderScene={(route, navigator) => {
                return <ListPage/>
              }}
            />
          </Container>
        </AppDrawer>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('fiveMJournalNative', () => fiveMJournalNative);
