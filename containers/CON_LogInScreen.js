import { connect } from 'react-redux';
import LogInScreen from '../components/Login/LogInScreen.js';

const mapStateToProps = (state) => {
  return {
    // authoringEnabled  : state.mainReducer.selectedDate === state.mainReducer.today,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginComplete: () => {
      dispatch({type: "LOG_IN_COMPLETE", data: null});
    }
  }
}

export default CON_LogInScreen = connect(mapStateToProps, mapDispatchToProps)(LogInScreen);
