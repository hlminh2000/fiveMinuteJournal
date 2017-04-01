import API_ACCOUNTS from '../configs/API_ACCOUNTS.json';
import * as firebase from 'firebase';

const Firebase = firebase.initializeApp(API_ACCOUNTS.FIREBASE);
var provider = new firebase.auth.FacebookAuthProvider();


export default Firebase;
