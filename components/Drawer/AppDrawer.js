
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
import LinearGradient from 'react-native-linear-gradient';


export default class AppDrawer extends Component {

    constructor(props){
      super(props);
      this.showJournalPage = this.showJournalPage.bind(this);
    }

    showJournalPage(){
      this.props.navigation.navigate('Journals');
    }

    render() {
      return (
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

          <LinearGradient
            colors={['#FF4E50', '#F9D423']}
            start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
            style={{height: 3, alignItems: 'center'}}>
          </LinearGradient>
          
          <ScrollView style={{paddingTop:15}}>

            <Button dark full transparent onPress={(this.showJournalPage)}>
              <Icon name="create"  />
              <Left><Text style={{fontSize: 18, marginLeft: 10}}>My Journals</Text></Left>
            </Button>

            <Button dark full transparent onPress={()=>{}}>
              <Icon name="options"  />
              <Left><Text style={{fontSize: 18, marginLeft: 10}}>Settings</Text></Left>
            </Button>

          </ScrollView>
        </View>
      );
    }
}
