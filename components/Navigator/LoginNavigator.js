import { StackNavigator } from 'react-navigation';
import LogInScreen from '../Login/LogInScreen.js';

const AppNavigator = StackNavigator({
  Login       : { screen: LogInScreen },
}, { headerMode: 'none' })

export default AppNavigator;
