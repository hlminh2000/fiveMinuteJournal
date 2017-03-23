

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
import Carousel from "react-native-carousel-control";
// import Carousel from "react-native-carousel";
// import Carousel from 'react-native-snap-carousel';

// import KeyboardEvents from 'react-native-keyboardevents';
// import {
//   Emitter as KeyboardEventEmitter
// } from 'react-native-keyboardevents';


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

  keyboardWillShow() {
    this.setState({
      ...this.state,
      currentPage: this.carousel.state.currentPage,
      isKeyboardOpened: true
    });
  }

  keyboardWillHide() {
    this.setState({
      ...this.state,
      isKeyboardOpened: false
    });
  }

  onCardCardContentChange(){
    console.log("isfbpsdbufsdfoivbfdso");
    this.setState({
      ...this.state,
      currentPage: this.carousel.state.currentPage,
    });
    this.forceUpdate();
  }

  componentDidMount() {
    // KeyboardEventEmitter.on(KeyboardEvents.KeyboardDidShowEvent, this.updateKeyboardSpace);
    // KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillHideEvent, this.resetKeyboardSpace);
    Keyboard.addListener('keyboardDidShow', this.keyboardWillShow.bind(this))
    Keyboard.addListener('keyboardDidHide', this.keyboardWillHide.bind(this))
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

    // setTimeout(()=>{
    //   this.setState({
    //     ...this.state,
    //     currentPage: this.state.currentPage+1,
    //   });
    // }, 1000);

    const cards = [
      <AuthoringCard1 ref="card1" key={1} onInputChange={this.onCardCardContentChange.bind(this)}/>,
      <AuthoringCard1 ref="card2" key={2} onInputChange={this.onCardCardContentChange.bind(this)}/>,
      <AuthoringCard1 ref="card3" key={3} onInputChange={this.onCardCardContentChange.bind(this)}/>,
      <View key={4}>
        <Text>GOOD JOB!</Text>
      </View>
    ];

    return (
      <Container style={{backgroundColor: 'white'}}>

        <View style = {{height: 3, width: Dimensions.get('window').width/3, backgroundColor: '#FF4E50'}}></View>

        <ScrollView contentContainerStyle={{alignItems:'center'}}>

          <View style={{
              flex: 1,
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

          {/* <ScrollView
            horizontal
            scrollEnabled={ !this.state.isKeyboardOpened }
            >
            {cards} */}
            <Carousel
              swipeThreshold={0.05}
              pageWidth={Dimensions.get('window').width - 35}
              currentPage={this.state.currentPage}
              onPageChange={()=>{console.log("changing!!!");}}
              ref={(carousel) => { this.carousel = carousel; }}
              // currentPage={
              //   // cards.indexOf(
              //     (()=>{
              //       const focusedCard = cards.filter((card)=>card.state.isFocused)
              //       return focusedCard ? cards.indexOf(ocusedCard) : 0;
              //     })()
              //   // )
              // }
              sneak={0.5}>
              { cards }
            </Carousel>
          {/* </ScrollView> */}

          {/* <Carousel width={375}>
            <View style={styles.container}>
              <Text>Page 1</Text>
            </View>
            <View style={styles.container}>
              <Text>Page 2</Text>
            </View>
            <View style={styles.container}>
              <Text>Page 3</Text>
            </View>
          </Carousel> */}

          {/* <Carousel
            ref={'carousel'}
            sliderWidth={Dimensions.get('window').width - 35}
            itemWidth={Dimensions.get('window').width - 35} >
            <AuthoringCard1/>
            <AuthoringCard1/>
            <AuthoringCard1/>
            <View>
              <Text>GOOD JOB!</Text>
            </View>
          </Carousel> */}

          {/* <TextInput
            // onFocus={this.setCardFocused.bind(this)}
            // onEndEditing={this.setCardUnfocused.bind(this)}
            underlineColorAndroid='transparent'
            autoCapitalize='sentences'
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              fontSize: 18,
              flex: 1,
              color: 'rgba(0, 0, 0, 0.6)',
              height: 40,
            }}/> */}

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
