import { connect } from 'react-redux';
import AppDrawer from '../components/Drawer/AppDrawer.js';

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutComplete: () => {
      dispatch({type: "LOG_OUT_COMPLETE", data: null});
    }
  }
}

export default CON_Authenticator = connect(mapStateToProps, mapDispatchToProps)(AppDrawer);
