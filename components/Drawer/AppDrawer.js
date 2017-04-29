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
  H2,
  List,
  ListItem,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Firebase from '../../services/Firebase.js';
import LocalStorageService from '../../services/LocalStorageService.js'

const database  = Firebase.database();

export default class AppDrawer extends Component {

    constructor(props){
      super(props);
      this.showJournalPage = this.showJournalPage.bind(this);
      this.showSettingPage = this.showSettingPage.bind(this);
    }

    showJournalPage(){
      this.props.navigation.navigate('Journals');
    }

    showSettingPage(){
      this.props.navigation.navigate('Settings');
    }

    logOut(){
      Firebase.auth().signOut().then(
        ()=>{
          LocalStorageService.clearUserToken();
          if(this.props.onLogoutComplete){
            this.props.onLogoutComplete();
          }
        }
      );
    }

    render() {

      return (
        <View style={{backgroundColor:'white', flex:1}}>
          <View style={{backgroundColor:'rgb(255, 255, 255)', height:200}}>
            <LinearGradient
              // colors={['#FF4E50', '#F9D423']}
              colors={['#FF4E50', '#FF4E50']}
              // colors={['#43C6AC', '#43C6AC']}
              start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={(this.props.userInfo && this.props.userInfo.photoURL) ? {uri: this.props.userInfo.photoURL} : require('./Assets/user_icon.png')}
                style={{
                  // borderColor: 'rgba(255, 255, 255, 0.3)',
                  borderWidth: 5,
                  borderRadius: 1000,
                  height: 80,
                  width: 80}}/>
                <Text style={{padding: 10, fontSize: 16, color:'rgba(255, 255, 255, 0.7)'}}>
                  {this.props.userInfo.firstName}'s Journals
                </Text>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.20)']}
                start={{x: 0.0, y: 0.0}} end={{x: 0, y: 1}}
                style={{position: 'absolute', bottom: 0, alignItems: 'center', width: 800, height: 20}}/>
            </LinearGradient>
          </View>


          <ScrollView style={{paddingTop:15}}>

            <List>
              <TouchableNativeFeedback
                onPress={ this.showJournalPage }
                background={TouchableNativeFeedback.SelectableBackground()}
                useForeground={true}>
                <ListItem>
                  <Left>
                    <Text style={{fontSize: 18, marginLeft: 10}}>My Journals</Text>
                  </Left>
                  <Right>
                    <Icon name="create" stlye={{color: 'lightgrey'}}  />
                  </Right>
                </ListItem>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback
                onPress={ this.showSettingPage }
                background={TouchableNativeFeedback.SelectableBackground()}
                useForeground={true}>
                <ListItem>
                  <Left>
                    <Text style={{fontSize: 18, marginLeft: 10}}>Settings</Text>
                  </Left>
                  <Right>
                    <Icon name="options" stlye={{color: 'lightgrey'}}  />
                  </Right>
                </ListItem>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback
                onPress={ this.showJournalPage }
                background={TouchableNativeFeedback.SelectableBackground()}
                useForeground={true}>
                <ListItem>
                  <Left>
                    <Text style={{fontSize: 18, marginLeft: 10}}>About</Text>
                  </Left>
                  <Right>
                    <Icon name="md-information-circle" stlye={{color: 'lightgrey'}}  />
                  </Right>
                </ListItem>
              </TouchableNativeFeedback>
            </List>

          </ScrollView>

          <TouchableNativeFeedback
            onPress={ this.logOut.bind(this) }
            background={TouchableNativeFeedback.SelectableBackground()}
            useForeground={true}>
            <View style={{alignItems: 'center'}}>
              <View style={{height: 0.5, backgroundColor: 'lightgrey', width: 250}}></View>
              <Text style={{fontSize: 18, color: 'grey', padding: 10}}>
                Sign out
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      );
    }
}
