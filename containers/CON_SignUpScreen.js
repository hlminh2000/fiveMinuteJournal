import { connect } from 'react-redux';
import SignUpScreen from '../components/Login/SignUpScreen.js';
import Firebase from '../services/Firebase.js';

const database  = Firebase.database();

const mapStateToProps = (state) => {
  return {
    // authoringEnabled  : state.mainReducer.selectedDate === state.mainReducer.today,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    onSignUpComplete: () => {
      const currentUser = Firebase.auth().currentUser;
      console.log(currentUser);
      database.ref('userInfo/' + currentUser.uid).once('value', function(userInfo){
        console.log(userInfo.val());
        dispatch({type: "LOG_IN_COMPLETE", data: userInfo.val()});
        database.ref('userInfo/' + currentUser.uid).on('value', function(userInfo){
          dispatch({type: "EXTERNAL_USER_DATA_CHANGE", data: userInfo.val()});
        });
      });
    }
  }
}

export default CON_SignUpScreen = connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
