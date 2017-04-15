import { connect } from 'react-redux';
import LogInScreen from '../components/Login/LogInScreen.js';
import Firebase from '../firebase/Firebase.js';

const database  = Firebase.database();

const mapStateToProps = (state) => {
  return {
    // authoringEnabled  : state.mainReducer.selectedDate === state.mainReducer.today,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    onLoginComplete: () => {
      const currentUser = Firebase.auth().currentUser;
      database.ref('userInfo/' + currentUser.uid).once('value', function(userInfo){
        if(!userInfo.val()){
          const newUserData = {
            firstName : currentUser.displayName,
            lastName  : null,
            photoURL  : currentUser.photoURL,
          }
          Firebase.database().ref('userInfo/' + Firebase.auth().currentUser.uid).set(newUserData)
          .then(()=>{
            console.log("added user: ", currentUser );
            dispatch({type: "LOG_IN_COMPLETE", data: newUserData});
            database.ref('userInfo/' + currentUser.uid).on('value', function(userInfo){
              dispatch({type: "EXTERNAL_USER_DATA_CHANGE", data: userInfo.val()});
            });
          })
        } else {
          dispatch({type: "LOG_IN_COMPLETE", data: userInfo.val()});
          database.ref('userInfo/' + currentUser.uid).on('value', function(userInfo){
            dispatch({type: "EXTERNAL_USER_DATA_CHANGE", data: userInfo.val()});
          });
        }
      });
    }
  }
}

export default CON_LogInScreen = connect(mapStateToProps, mapDispatchToProps)(LogInScreen);
