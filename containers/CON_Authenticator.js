import { connect } from 'react-redux';
import Authenticator from '../components/Authenticator/Authenticator.js';

const mapStateToProps = (state) => {
  return {
    isLoggedIn  : state.mainReducer.isLoggedIn,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // goToAuthoringPage: () => {
    //   dispatch({type: "ENTER_AUTHORING_PAGE", data: null});
    // }
  }
}

export default CON_Authenticator = connect(mapStateToProps, mapDispatchToProps)(Authenticator);
