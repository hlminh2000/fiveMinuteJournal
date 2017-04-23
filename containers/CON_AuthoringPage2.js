import { connect } from 'react-redux';
import AuthoringPage2 from '../components/Scenes/AuthoringPage2.js';

const mapStateToProps = (state) => {
  return {
    currentJournalEntry  : state.mainReducer.currentJournalEntry,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default CON_AuthoringPage2 = connect(mapStateToProps, mapDispatchToProps)(AuthoringPage2);
