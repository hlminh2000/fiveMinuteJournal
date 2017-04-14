

import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableNativeFeedback,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  Container,
  Button,
  Card,
  Grid,
  Col,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Firebase from '../../firebase/Firebase.js';
import Spinner from 'react-native-spinkit';
import FireAuth from 'react-native-firebase-auth';

export default class LogInScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      email:  null,
      password: null,
      isLoggingIn: false,
      warningMessage: null,
    }
    this.showWarningMessage.bind(this);
    FireAuth.init();
  }

  componentDidMount() {
    FireAuth.setup(
      this.onLogin.bind(this),
      this.onUserChange.bind(this),
      this.onLogout.bind(this),
      this.emailVerified.bind(this),
      this.onError.bind(this));
  }

  onLogin(){
    console.log("currentUser: ", Firebase.auth().currentUser);
    if(this.props.onLoginComplete){
      this.props.onLoginComplete();
    }
  }

  onUserChange(){

  }

  onLogout(){

  }

  emailVerified(){

  }

  onError(err){
    console.log("ERROR: ", err);
  }

  onSignUpPress(){
    this.props.navigation.navigate('Signup');
  }

  signInWithEmailAndPassword(){
    if(this.state.email && this.state.password){
      this.setState({
        ...this.state,
        isLoggingIn: true,
      })
      FireAuth.login(this.state.email, this.state.password);
    } else {
      this.showWarningMessage("Please enter your email and password");
    }
  }

  // signInWithEmailAndPassword(){
  //   if(this.state.email && this.state.password){
  //     this.setState({
  //       ...this.state,
  //       isLoggingIn: true,
  //     })
  //     Firebase.auth()
  //     .signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(() => {
  //       if(this.props.onLoginComplete){
  //         this.props.onLoginComplete();
  //       }
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         ...this.state,
  //         isLoggingIn: false,
  //       })
  //       this.showWarningMessage(err.message);
  //     })
  //   } else {
  //     this.showWarningMessage("Please enter your email and password");
  //   }
  // }

  showWarningMessage(message){
    this.setState({
      ...this.state,
      warningMessage: message,
    });
    setTimeout(()=>{
      this.setState({
        ...this.state,
        warningMessage: null,
      });
    }, 5000);
  }

  loginWithFacebook(){
    FireAuth.facebookLogin()
  }

  loginWithGoogle(){
    FireAuth.googleLogin()
  }

  render() {

    const windowDimention = Dimensions.get('window');
    const cardContentWidth = windowDimention.width - 120;

    return (
      <Container>
        <StatusBar
          backgroundColor="rgb(67,198,172)"
          barStyle="light-content"
        />
        <Image
          // source={{uri: 'http://digioh.com/blog/wp-content/uploads/2016/08/teaser.jpg'}}
          source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mjournal-6d19f.appspot.com/o/skyscrapers-246224_1920.jpg?alt=media&token=61c45321-b324-4862-a2ed-406e4bbf6fe3'}}
          style={{flex: 1, top: 0, left: 0}}>
          <LinearGradient
            colors={['rgba(67,198,172, 0.7)', 'rgba(67,198,172, 0.7)']}
            start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'}}>
            {
              (()=>{ if(!this.state.isLoggingIn){
                return (
                  <View>
                    <View
                      style={{
                        // flex: 1,
                        flexDirection:'row',
                        width: windowDimention.width - 45,
                        alignItems:'center'
                      }}>
                      <Card style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 5,
                        height: windowDimention.height * 1.3/2}}>
                        { (()=>{
                            return this.state.warningMessage ? (
                              <View style={{
                                position: 'absolute',
                                height: 60,
                                borderRadius: 5,
                                borderColor: 'rgba(255, 0, 0, 0.6)',
                                borderWidth: 1,
                                backgroundColor: 'rgba(255, 0, 0, 0.4)',
                                top: 10,
                                width: windowDimention.width - 80,
                                paddingLeft: 10,
                                paddingRight: 10,
                                justifyContent: 'center',
                              }}>
                                <Text>{this.state.warningMessage}</Text>
                              </View>
                            ) : null;
                          })() }
                        <View style={{marginTop: 20}}>
                          <TextInput
                            onChangeText={(text)=>{ this.setState({ ...this.state, email: text }) }}
                            underlineColorAndroid='transparent'
                            autoCapitalize='sentences'
                            placeholder="email"
                            value={this.state.email}
                            placeholderTextColor='lightgrey'
                            style={{
                              textAlign: 'center',
                              marginBottom: 20,
                              fontSize: 18,
                              borderBottomColor: 'lightgrey',
                              borderBottomWidth: 0.5,
                              padding: 0,
                              height: 30,
                              color: 'rgba(0, 0, 0, 0.6)',
                              width: cardContentWidth,
                            }}/>
                        </View>
                        <View style={{marginTop: 20}}>
                          <TextInput
                            onChangeText={(text)=>{ this.setState({ ...this.state, password: text }) }}
                            underlineColorAndroid='transparent'
                            autoCapitalize='sentences'
                            placeholder="password"
                            value={this.state.password}
                            placeholderTextColor='lightgrey'
                            style={{
                              textAlign: 'center',
                              marginBottom: 20,
                              fontSize: 18,
                              borderBottomColor: 'lightgrey',
                              borderBottomWidth: 0.5,
                              padding: 0,
                              height: 30,
                              color: 'rgba(0, 0, 0, 0.6)',
                              width: cardContentWidth,
                            }}
                            secureTextEntry={true}/>
                        </View>
                        <View style={{marginTop: 20}}>
                          <Button
                              style={{
                                width: cardContentWidth *3/4,
                                borderRadius: 100,
                                justifyContent:'center',
                                flexDirection: 'column',
                                paddingTop: 0,
                                paddingBottom: 0}}>
                            <TouchableNativeFeedback
                              onPress={ this.signInWithEmailAndPassword.bind(this) }
                              background={ TouchableNativeFeedback.SelectableBackground() }
                              style={{
                                borderRadius: 100,
                              }}
                              useForeground={true}>
                              <LinearGradient
                                colors={['#FF4E50', '#FF4E50']}
                                start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
                                style={{
                                  borderRadius: 100,
                                  width: cardContentWidth *3/4,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  flex:1,
                                }}>
                                <Text style={{fontSize: 16, color: 'white'}}>Log in</Text>
                              </LinearGradient>
                            </TouchableNativeFeedback>
                          </Button>
                        </View>
                        <View style={{marginTop: 20}}>
                          <Button
                            onPress={ this.onSignUpPress.bind(this) }
                            style={{
                              width: cardContentWidth *3/4,
                              borderRadius: 100,
                              justifyContent: 'center',
                              backgroundColor: 'rgb(230, 230, 230)'}}>
                            <Text style={{fontSize: 16, color: 'grey'}}>Sign up with email</Text>
                          </Button>
                        </View>
                      </Card>
                    </View>

                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                      <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                        <Button style={{backgroundColor: '#39589A', flex: 1, justifyContent: 'center', borderRadius: 100}} onPress={this.loginWithFacebook.bind(this)}>
                          <Image source={require('./Assets/facebook_f.png')} style={{width: 20, marginTop: 5, marginRight: 10}} resizeMode='contain'/>
                          <Text style={{color: 'white'}}>Login</Text>
                        </Button>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                        <Button style={{backgroundColor: '#F6392F', flex: 1, justifyContent: 'center', borderRadius: 100}} onPress={this.loginWithGoogle.bind(this)}>
                          <Image source={require('./Assets/google_g.png')} style={{width: 20, marginRight: 10}} resizeMode='contain'/>
                          <Text style={{color: 'white'}}>Login</Text>
                        </Button>
                      </View>
                    </View>

                  </View>
                )
              }})()
            }
            <Spinner isVisible={this.state.isLoggingIn} color={"white"} size={windowDimention.width * 3/4} type={'Pulse'}/>
          </LinearGradient>
        </Image>
      </Container>
    );
  }
}
