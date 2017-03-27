import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  Keyboard,
  ViewPagerAndroid
} from 'react-native';
import {
  Container,
  Card
} from 'native-base';
import { TabNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from '../NavBar/NavBar.js';
import AuthoringCard1 from '../AuthoringCards/AuthoringCard1.js';


var styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});


export default class AuthoringPage1 extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentPage: 0,
      isKeyboardOpened: false,
    }
  }

  static navigationOptions = {
    title: 'Life',
  }

  static defaultProp = {
    navigation : null,
    backgroundColor: '#F8FFAE',
  }

  goToNextPage(){
    console.log("asdgosnfon");
    this.props.navigation.navigate('q2');
  }

  render(){

    const windowDimention = Dimensions.get('window');

    return (
      <Container style={{backgroundColor: 'white'}}>

        <View style = {{height: 3, width: windowDimention.width/3, backgroundColor: '#FF4E50'}}></View>

        <ScrollView contentContainerStyle={{alignItems:'center', height: windowDimention.height - 30 }}>

          <View style={{
              height: 100,
              flexDirection:'row',
              paddingTop: 20,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20}}>
            <Image
              source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg'}}
              style={{height: 60, width: 60, borderRadius:50}}
            />
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text style={{fontSize: 18, color: 'rgba(0, 0, 0, 0.3)',fontStyle:'italic'}}>
                Stay hungry, stay foolish.
              </Text>
              <Text style={{fontSize: 18, color: 'rgba(0, 0, 0, 0.3)',fontStyle:'italic', position: 'absolute', bottom: 0, right: 0}}>
                - Steve Jobs -
              </Text>
            </View>
          </View>

          <ViewPagerAndroid
            initialPage={0}
            style={{
              width: windowDimention.width,
              flex: 1,
            }}
            >
              <View style={{alignItems: 'center'}}>
                <View style={{height: windowDimention.height - 100 - 80, width: windowDimention.width - 20}}>
                  <AuthoringCard1 ref="card1"/>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{height: windowDimention.height - 100 - 80, width: windowDimention.width - 20}}>
                  <AuthoringCard1 ref="card2"/>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{height: windowDimention.height - 100 - 80, width: windowDimention.width - 20}}>
                  <AuthoringCard1 ref="card3"/>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text>GOOD JOB!</Text>
              </View>
          </ViewPagerAndroid>

        </ScrollView>


        <ActionButton
          onPress={() => { this.goToNextPage.bind(this) }}
          icon={<Icon name="ios-arrow-forward" style={{color: 'white', fontSize: 20}}/>}
          buttonColor={'#FF4E50'}>
        </ActionButton>
      </Container>
    )
  }
}
