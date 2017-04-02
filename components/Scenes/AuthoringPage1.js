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
  TouchableNativeFeedback,
  ViewPagerAndroid
} from 'react-native';
import {
  Container,
  Card,
  Button
} from 'native-base';
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
      viewPagerScrollState: null,
      isKeyboardOpened: false,
      quoteData: null,
    }
  }

  componentDidMount(){
    this.setState({
      ...this.state,
      currentPage: this.viewPager.state,
    });
    this.getQuote();
  }

  static navigationOptions = {
    title: 'Life',
  }

  static defaultProp = {
    navigation : null,
    backgroundColor: '#F8FFAE',
  }

  onDoneButtonPress(){
    this.props.navigation.goBack();
  }

  onViewPagerScroll(state){
    this.setState({
      ...this.state,
      currentPage: state.nativeEvent.position,
    });
  }

  getQuote(){
    fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', {
      method: 'POST',
      headers: {
        'X-Mashape-Key' : 'fW86umSu3qmshWyv7l4jetvoqOA0p1RGfeYjsns5uqMqEhiEdE',
        'Content-Type'  : 'application/x-www-form-urlencoded',
        'Accept'        : 'application/json'
      }
    })
    .then((response)=>{return response.json()})
    .then((response)=>{
      this.setState({
        ...this.state,
        quoteData: response
      });
    })
  }

  render(){

    const windowDimention = Dimensions.get('window');

    return (
      <Container style={{backgroundColor: 'white'}}>

        <View style = {{height: 3, width: windowDimention.width}}>
          <LinearGradient
            // colors={['#F8FFAE', '#43C6AC']}
            colors={['#43C6AC', '#43C6AC']}
            start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
            style={{height:3, borderRadius: 5, width: windowDimention.width}}/>
          <View style={{
              backgroundColor: 'white',
              width: windowDimention.width*(1-this.state.currentPage/3),
              height: 3,
              position: 'absolute',
              left: windowDimention.width*this.state.currentPage/3}}/>
        </View>

        <ScrollView contentContainerStyle={{alignItems:'center', height: windowDimention.height - 30 }}>

          <View style={{
            height: 100,
            flexDirection:'row',
            paddingTop: 20,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20}}>
              {/* <Image
                source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg'}}
                style={{height: 60, width: 60, borderRadius:50}}
                /> */}
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.3)',fontStyle:'italic'}}>
                { this.state.quoteData ? this.state.quoteData.quote : "" }
              </Text>
              <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.3)',fontStyle:'italic', position: 'absolute', bottom: 0, right: 0}}>
                { this.state.quoteData ? "- " + this.state.quoteData.author + " -" : "" }
              </Text>
            </View>
          </View>


          <ViewPagerAndroid
            initialPage={0}
            ref={viewPager => { this.viewPager = viewPager }}
            onPageSelected={this.onViewPagerScroll.bind(this)}
            pageMargin={-30}
            style={{
              width: windowDimention.width,
              flex: 1,
            }}
            >
              <View style={{alignItems: 'center'}}>
                <View style={{height: windowDimention.height - 100 - 50, width: windowDimention.width - 40}}>
                  <AuthoringCard1
                    inputCount={ 3 }
                    showIndex={true}
                    headerText={"I am grateful for..."}/>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{height: windowDimention.height - 100 - 50, width: windowDimention.width - 40}}>
                  <AuthoringCard1
                    inputCount={ 3 }
                    showIndex={true}
                    headerText={"What would make today \ngreat?"}/>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{height: windowDimention.height - 100 - 230, width: windowDimention.width - 40}}>
                  <AuthoringCard1
                    inputCount={ 1 }
                    showIndex={false}
                    headerText={"Daily affirmations. I am..."}/>
                </View>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 100}}>
                <View style={{width: windowDimention.width - 90}}>
                  <View style={{marginBottom: 20}}>
                    <Text style={{color: '#43C6AC', fontSize:18}}>Great Job!</Text>
                  </View>
                  <View style={{marginBottom: 20}}>
                    <Text style={{color: '#43C6AC', fontSize:18}}>Now go rock the world!</Text>
                  </View>
                  <View>
                    <Button rounded bordered style={{borderColor: "#43C6AC"}}
                      onPress={this.onDoneButtonPress.bind(this)}>
                      <Text style={{color: '#43C6AC'}}>Done</Text>
                    </Button>
                  </View>
                </View>

              </View>
          </ViewPagerAndroid>

        </ScrollView>


        {/* <ActionButton
          onPress={() => { this.goToNextPage.bind(this) }}
          icon={<Icon name="ios-arrow-forward" style={{color: 'white', fontSize: 20}}/>}
          buttonColor={'#FF4E50'}>
        </ActionButton> */}
      </Container>
    )
  }
}
