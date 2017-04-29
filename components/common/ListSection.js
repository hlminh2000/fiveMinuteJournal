import React, {
  Component,
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  StatusBar,
} from 'react-native';
import {
  Container,
} from 'native-base';

export default class ListSection extends Component {
  render(){
    return (
      <View style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
        <View style={{paddingTop: 15, paddingLeft: 10, paddingBottom: 5}}>
          <Text style={{color: 'darkgrey'}}>
            {this.props.title}
          </Text>
        </View>
        <View style={{backgroundColor: 'white'}}>
          {this.props.children}
        </View>
      </View>
    )
  }
}
