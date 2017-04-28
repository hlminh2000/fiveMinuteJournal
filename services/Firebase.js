import API_ACCOUNTS from '../configs/API_ACCOUNTS.json';
// import * as firebase from 'firebase';
import RNFirebase from 'react-native-firebase';

const Firebase = RNFirebase.initializeApp(API_ACCOUNTS.FIREBASE);

export default Firebase;
