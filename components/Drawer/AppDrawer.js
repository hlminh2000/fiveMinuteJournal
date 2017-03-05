
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import {
  Drawer,
  Content,
  Left,
  Icon,
  Right,
  Button,
  H2
} from 'native-base';

export default class AppDrawer extends Component {
    render() {
      that = this;
      openDrawer = () => {
        this._drawer._root.open()
      };
      closeDrawer = () => {
        this._drawer._root.close()
      };
      return (
        <Drawer
          ref={(ref) => { this._drawer = ref; }}
          content={
            <View style={{backgroundColor:'white', flex:1}}>
              <View style={{backgroundColor:'rgb(255, 255, 255)', height:200}}>
                <Image
                  source={{uri: 'http://digioh.com/blog/wp-content/uploads/2016/08/teaser.jpg'}}
                  style={{height: 200}}>
                  <View style={{marginLeft:10,marginTop:5, position:'absolute', bottom:5}}>
                    <H2 style={{color:'white', fontStyle:'italic', fontFamily:'droidserif'}}>{"Journals"}</H2>
                  </View>
                </Image>
              </View>
              <ScrollView style={{paddingTop:15}}>
                <Button dark full transparent>
                  <Icon name="create"  />
                  <Left><Text style={{fontSize: 18, marginLeft: 10}}>My Journals</Text></Left>
                </Button>
                <Button dark full transparent>
                  <Icon name="options"  />
                  <Left><Text style={{fontSize: 18, marginLeft: 10}}>Settings</Text></Left>
                </Button>
              </ScrollView>
            </View>
          }
          onClose={() => closeDrawer()}
          onShow={() => this.openDrawer()}
        >
          {this.props.children}
        </Drawer>
      );
    }
}
