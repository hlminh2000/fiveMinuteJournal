import { StackNavigator } from 'react-navigation';
import CON_LogInScreen from '../../containers/CON_LogInScreen.js';
import CON_SignUpScreen from '../../containers/CON_SignUpScreen.js';

const LoginNavigator = StackNavigator({
  Login       : { screen: CON_LogInScreen },
  Signup      : { screen: CON_SignUpScreen },
}, { headerMode: 'none' })

export default LoginNavigator;
