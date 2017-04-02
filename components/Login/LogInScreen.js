
import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import {
  Container,
  Button,
  Card,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Firebase from '../../firebase/Firebase.js';
import Spinner from 'react-native-spinkit';


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
    this.signInWithEmailAndPassword.bind(this);
  }

  signInWithEmailAndPassword(){
    if(this.state.email && this.state.password){
      this.setState({
        ...this.state,
        isLoggingIn: true,
      })
      Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        if(this.props.onLoginComplete){
          this.props.onLoginComplete();
        }
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          isLoggingIn: false,
        })
        console.log(err);
      })
    } else {
      this.showWarningMessage("Please enter your email and password");
    }
  }

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
    }, 2000);
  }

  render() {

    const windowDimention = Dimensions.get('window');

    return (
      <Container>
        <Image
          source={{uri: 'http://digioh.com/blog/wp-content/uploads/2016/08/teaser.jpg'}}
          style={{flex: 1, top: 0, left: 0}}>
          <LinearGradient
            colors={['rgba(67,198,172, 0.7)', 'rgba(248,255,174, 0.7)']}
            start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'}}>
            {
              (()=>{ if(!this.state.isLoggingIn){
                return (
                  <View
                    style={{
                      flex: 1,
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
                      height: windowDimention.height * 3/4}}>
                      { (()=>{
                          return this.state.warningMessage ? (
                            <View style={{
                              position: 'absolute',
                              height: 60,
                              borderRadius: 5,
                              borderColor: 'rgba(255, 0, 0, 0.6)',
                              borderWidth: 1,
                              backgroundColor: 'rgba(255, 0, 0, 0.4)',
                              top: 20,
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
                            backgroundColor: 'rgba(0, 0, 0, 0.07)',
                            textAlign: 'center',
                            color: 'grey',
                            padding: 0,
                            fontSize: 18,
                            height: 40,
                            width: windowDimention.width - 80,
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
                            backgroundColor: 'rgba(0, 0, 0, 0.07)',
                            textAlign: 'center',
                            color: 'grey',
                            padding: 0,
                            fontSize: 18,
                            height: 40,
                            width: windowDimention.width - 80,
                          }}
                          secureTextEntry={true}/>
                      </View>
                      <View style={{marginTop: 20}}>
                        <Button
                            style={{
                              width: windowDimention.width-150,
                              borderRadius: 5,
                              justifyContent:'center',
                              flexDirection: 'column',
                              paddingTop: 0,
                              paddingBottom: 0}}>
                          <TouchableNativeFeedback
                            onPress={ signInWithEmailAndPassword() }
                            background={ TouchableNativeFeedback.SelectableBackground() }
                            useForeground={true}>
                            <LinearGradient
                              colors={['#FF4E50', '#F9D423']}
                              start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.5}}
                              style={{
                                borderRadius: 5,
                                width: windowDimention.width-150,
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
                        <Button style={{
                          width: windowDimention.width-150,
                          borderRadius: 5,
                          justifyContent: 'center',
                          backgroundColor: 'rgb(230, 230, 230)'}}>
                          <Text style={{fontSize: 16, color: 'grey'}}>Sign up</Text>
                        </Button>
                      </View>
                    </Card>

                  </View>
                )
              }})()
            }
            <Spinner isVisible={this.state.isLoggingIn} color={"white"} size={windowDimention.width / 3} type={'Bounce'}/>
          </LinearGradient>
        </Image>
      </Container>
    );
  }
}
