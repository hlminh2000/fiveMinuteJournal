import { connect } from 'react-redux';
import ProfileSection from '../components/Scenes/SettingsPage/ProfileSection.js';

const mapStateToProps = (state) => {
  return {
    // authoringEnabled  : state.mainReducer.selectedDate === state.mainReducer.today,
    firstName: state.mainReducer.currentUserInfo.firstName,
    lastName: state.mainReducer.currentUserInfo.lastName,
    email: state.mainReducer.currentUserInfo.userEmail,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // goToAuthoringPage: () => {
    //   dispatch({type: "ENTER_AUTHORING_PAGE", data: null});
    // }
    onUserEmailUpdated: (newEmail) => {
      dispatch({type: "USER_EMAIL_UPDATE", data: newEmail});
    },
    onEmailUpdateError: (error) => {
      dispatch({type: "SHOW_ERROR_MESSAGE"}, data: "Error contacting server, please check your internet connection");
    }
  }
}

export default CON_Settings_ProfileSection = connect(mapStateToProps, mapDispatchToProps)(ProfileSection);
