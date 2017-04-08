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
import CON_AuthoringCard1 from '../../containers/CON_AuthoringCard1.js';
import Moment from 'moment';
import Firebase from '../../firebase/Firebase.js';
import Spinner from 'react-native-spinkit';

const database = Firebase.database();

const styles = StyleSheet.create({
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
      isTransmittingData:false,
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
    this.setState({ ...this.state, isTransmittingData: true });
    this.transmitDataToFirebase(this.props.currentJournalEntry)
      .then((data) => {
        setTimeout(()=>{
          this.props.navigation.goBack();
          this.setState({ ...this.state, isTransmittingData: false });
        },1000);
      })
      .catch((err) => {
        this.setState({ ...this.state, isTransmittingData: false });
        console.log(err);
      });
  }

  transmitDataToFirebase(entryData){
    const currentUser = Firebase.auth().currentUser;
    const today = Moment().format('YYYY-MM-DD');
    return database.ref('posts/' + currentUser.uid + "/" + today).set(entryData);
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
        <Image
          style={{flex: 1}}
          source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mjournal-6d19f.appspot.com/o/skyscrapers-246224_1920.jpg?alt=media&token=61c45321-b324-4862-a2ed-406e4bbf6fe3'}}>
          <View style={{flex: 1, backgroundColor: 'rgba(67,198,172, 0.7)', justifyContent: 'center', alignItems: 'center'}}>
            {
              (()=>{
                if(!this.state.isTransmittingData){ return (
                  <View style={{flex: 1}}>
                    <View style = {{height: 3, width: windowDimention.width}}>
                      <LinearGradient
                        // colors={['#F8FFAE', '#43C6AC']}
                        colors={['white', 'white']}
                        start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
                        style={{height:3, borderRadius: 5, width: windowDimention.width*(this.state.currentPage/3)}}/>
                      {/* <View style={{
                        backgroundColor: 'white',
                        width: windowDimention.width*(1-this.state.currentPage/3),
                        height: 3,
                        position: 'absolute',
                        left: windowDimention.width*this.state.currentPage/3}}/> */}
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
                                <Text style={{fontSize: 12, color: 'white',fontStyle:'italic'}}>
                                  { this.state.quoteData ? this.state.quoteData.quote : "" }
                                </Text>
                                <Text style={{fontSize: 12, color: 'white',fontStyle:'italic', position: 'absolute', bottom: 0, right: 0}}>
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
                                <View style={{height: windowDimention.height - 100 - 60, width: windowDimention.width - 40}}>
                                  <CON_AuthoringCard1
                                    questionId={ "q1" }
                                    inputCount={ 3 }
                                    showIndex={ true }
                                    headerText={"I am grateful for..."}/>
                                </View>
                              </View>
                              <View style={{alignItems: 'center'}}>
                                <View style={{height: windowDimention.height - 100 - 60, width: windowDimention.width - 40}}>
                                  <CON_AuthoringCard1
                                    questionId={ "q2" }
                                    inputCount={ 3 }
                                    showIndex={ true }
                                    headerText={"What would make today \ngreat?"}/>
                                </View>
                              </View>
                              <View style={{alignItems: 'center'}}>
                                <View style={{height: windowDimention.height - 100 - 230, width: windowDimention.width - 40}}>
                                  <CON_AuthoringCard1
                                    questionId={ "q3" }
                                    inputCount={ 1 }
                                    showIndex={ false }
                                    headerText={"Daily affirmations. \nI am..."}/>
                                </View>
                              </View>
                              <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 200}}>
                                <View style={{width: windowDimention.width - 90}}>
                                  <View style={{marginBottom: 20}}>
                                    <Text style={{color: 'white', fontSize:18}}>Great Job!</Text>
                                  </View>
                                  <View style={{marginBottom: 20}}>
                                    <Text style={{color: 'white', fontSize:18}}>Now go rock the world!</Text>
                                  </View>
                                  <View>
                                    <Button rounded style={{borderColor: "#FF4E50", backgroundColor: "#FF4E50"}}
                                      onPress={this.onDoneButtonPress.bind(this)}>
                                      <Text style={{color: 'white'}}>Done</Text>
                                    </Button>
                                  </View>
                                </View>

                              </View>
                            </ViewPagerAndroid>
                          </ScrollView>
                        </View>
                      )}
                    })()
                  }
              <Spinner isVisible={this.state.isTransmittingData} color={"white"} size={windowDimention.width * 3/4} type={'Pulse'}/>
          </View>
        </Image>
      </Container>
    )
  }
}
