
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableNativeFeedback
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

    constructor(props){
      super(props);
      this.showJournalPage = this.showJournalPage.bind(this);
      this.showEditPage = this.showEditPage.bind(this);
    }

    showJournalPage(){
      const currentRoutes = this.props.navigator.getCurrentRoutes();
      this._drawer._root.close();
      const targetRoute = {
        link: 'my_journals',
        title: 'My Journals',
        index: 1
      };
      setTimeout(()=>{
          if (currentRoutes[currentRoutes.length-1].link !== 'my_journals'){
        //     this.props.navigator.push(targetRoute);
        //     setTimeout(()=>{
              this.props.navigator.replaceWithAnimation(targetRoute);
        //     }, 100);
          }
      }, 260);
    }

    showEditPage(){
      const currentRoutes = this.props.navigator.getCurrentRoutes();
      this._drawer._root.close();
      const targetRoute = {
        link: 'setting_screen',
        title: 'Settings',
        index: 1
      };
      setTimeout(()=>{  // USING REPLACE INSTEAD OF PUSH BECAUSE PARALLAX + NAVIGATOR CAUSES MEMORY LEAKS
          if (currentRoutes[currentRoutes.length-1].link !== 'setting_screen'){
        //     this.props.navigator.push(targetRoute);
        //     setTimeout(()=>{
              this.props.navigator.replaceWithAnimation(targetRoute);
        //     }, 100);
          }
      }, 260);
    }

    render() {
      return (
        <Drawer
          ref={(ref) => { this._drawer = ref; }}
          tweenDuration={250}
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

                <Button dark full transparent onPress={this.showJournalPage}>
                  <Icon name="create"  />
                  <Left><Text style={{fontSize: 18, marginLeft: 10}}>My Journals</Text></Left>
                </Button>

                <Button dark full transparent onPress={this.showEditPage}>
                  <Icon name="options"  />
                  <Left><Text style={{fontSize: 18, marginLeft: 10}}>Settings</Text></Left>
                </Button>

              </ScrollView>
            </View>
          }>
          {this.props.children}
        </Drawer>
      );
    }
}
