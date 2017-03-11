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


export default class AppWrapper extends Component {


  render(){
    return (
      <AppDrawer ref="appDrawer" navigator={this.props.navigator}>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={()=>{this.refs.appDrawer._drawer._root.open()}}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>{this.props.title}</Title>
            </Body>
            <Right />
          </Header>
          {this.props.children}
        </Container>
      </AppDrawer>
    )
  }

}
