import { connect } from 'react-redux';
import ListPage from '../components/Scenes/ListPage.js';
import Moment from 'moment';

const mapStateToProps = (state) => {
  console.log(state.mainReducer);
  const isMorningJournalAvailable = state.mainReducer.currentJournalEntry && (
    ((state.mainReducer.currentJournalEntry[0]) && (state.mainReducer.currentJournalEntry[0][0] || state.mainReducer.currentJournalEntry[0][1] || state.mainReducer.currentJournalEntry[0][2])) ||
    ((state.mainReducer.currentJournalEntry[1]) && (state.mainReducer.currentJournalEntry[1][0] || state.mainReducer.currentJournalEntry[1][1] || state.mainReducer.currentJournalEntry[1][2])) ||
    ((state.mainReducer.currentJournalEntry[2]) && (state.mainReducer.currentJournalEntry[2][0] || state.mainReducer.currentJournalEntry[2][1] || state.mainReducer.currentJournalEntry[2][2])))
  const isEveningJournalAvailable = state.mainReducer.currentJournalEntry && (
    ((state.mainReducer.currentJournalEntry[3]) && (state.mainReducer.currentJournalEntry[3][0] || state.mainReducer.currentJournalEntry[3][1] || state.mainReducer.currentJournalEntry[3][2])) ||
    ((state.mainReducer.currentJournalEntry[4]) && (state.mainReducer.currentJournalEntry[4][0] || state.mainReducer.currentJournalEntry[4][1] || state.mainReducer.currentJournalEntry[4][2])))
  const isEvening = Moment().hour() > 17;
  const isAuthoringReady = isEvening ? !isEveningJournalAvailable : !isMorningJournalAvailable;
  const isTodaySelected = state.mainReducer.selectedDate === state.mainReducer.today;

  return {
    // authoringEnabled  : isTodaySelected && isAuthoringReady,
    authoringEnabled  : true,
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
