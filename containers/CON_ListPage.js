import { connect } from 'react-redux';
import ListPage from '../components/Scenes/ListPage.js';

const mapStateToProps = (state) => {
  return {
    authoringEnabled  : state.mainReducer.selectedDate === state.mainReducer.today,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToAuthoringPage: () => {
      dispatch({type: "ENTER_AUTHORING_PAGE", data: null});
    }
  }
}

export default CON_ListPage = connect(mapStateToProps, mapDispatchToProps)(ListPage);
