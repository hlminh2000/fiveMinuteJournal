
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
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class LogInScreen extends Component {

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
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{marginTop: 20}}>
              <TextInput
                onChangeText={()=>{ console.log("typing!!!"); if(this.props.onInputChange) {this.props.onInputChange()}}}
                underlineColorAndroid='transparent'
                autoCapitalize='sentences'
                placeholder="email"
                placeholderTextColor='rgba(255, 255, 255, 0.3)'
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.07)',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                  height: 40,
                  width: windowDimention.width - 50,
                }}/>
            </View>
            <View style={{marginTop: 20}}>
              <TextInput
                onChangeText={()=>{ console.log("typing!!!"); if(this.props.onInputChange) {this.props.onInputChange()}}}
                underlineColorAndroid='transparent'
                autoCapitalize='sentences'
                placeholder="password"
                placeholderTextColor='rgba(255, 255, 255, 0.3)'
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.07)',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                  height: 40,
                  width: windowDimention.width - 50,
                }}/>
            </View>
            <View style={{marginTop: 20}}>
              <Button style={{width: windowDimention.width-150, borderRadius: 5, justifyContent:'center', flexDirection: 'column', paddingTop: 0, paddingBottom: 0}}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} useForeground={true}>
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
              <Button style={{width: windowDimention.width-150, borderRadius: 5, justifyContent: 'center', backgroundColor: 'lightgrey'}}>
                <Text style={{fontSize: 16, color: 'grey'}}>Sign up</Text>
              </Button>
            </View>
          </LinearGradient>
        </Image>
      </Container>
    );
  }
}
