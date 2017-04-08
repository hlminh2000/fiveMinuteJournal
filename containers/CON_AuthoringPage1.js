import { connect } from 'react-redux';
import AuthoringPage1 from '../components/Scenes/AuthoringPage1.js';

const mapStateToProps = (state) => {
  return {
    currentJournalEntry  : state.mainReducer.currentJournalEntry,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default CON_AuthoringPage1 = connect(mapStateToProps, mapDispatchToProps)(AuthoringPage1);
