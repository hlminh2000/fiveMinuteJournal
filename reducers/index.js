import { combineReducers } from 'redux';
import Moment from 'moment';

const emptyJournalEntry = () => {
  return {
    q1: [null, null, null],
    q2: [null, null, null],
    q3: [null],
    q4: [null, null, null],
    q5: [null],
  }
}

const initialState = {
  hardwareBackButtonEnabled: true,
  selectedDate      : Moment().format('YYYY-MM-DD'),
  today             : Moment().format('YYYY-MM-DD'),
  calendarStartDate : Moment().startOf('month').format('YYYY-MM-DD'),
  calendarEndDate   : Moment().endOf('month').format('YYYY-MM-DD'),
  isLoggedIn        : false,
  currentUserInfo   : {
    firstName : null,
    lastName  : null,
    photoURL  : null,
  },
  currentJournalEntry  : emptyJournalEntry(),
}

const reducers = combineReducers({
  mainReducer:  (state, action) => {
    switch (action.type) {

      case "END_OF_DAY":
        return {
          ...state,
          today : Moment().format('YYYY-MM-DD'),
        }

      case "CALENDAR_LIST_DATE_SELECT":
        return {
          ...state,
          selectedDate : action.data,
        }

      case "CALENDAR_NEXT_MONTH_PRESSED":
        return {
          ...state,
          calendarStartDate : Moment(state.calendarStartDate).add(1, 'month').format('YYYY-MM-DD'),
          calendarStartDate : Moment(state.calendarEndDate).add(1, 'month').format('YYYY-MM-DD'),
        }

      case "CALENDAR_PREV_MONTH_PRESSED":
        return {
          ...state,
          calendarStartDate : Moment(state.calendarStartDate).subtract(1, 'month').format('YYYY-MM-DD'),
          calendarStartDate : Moment(state.calendarEndDate).subtract(1, 'month').format('YYYY-MM-DD'),
        }

      case "SELECTED_DATE_POST_FETCHED":
        return {
          ...state,
          currentJournalEntry  : action.data || emptyJournalEntry(),
        }

      case "ENTER_AUTHORING_PAGE":
        return {
          ...state,
          hardwareBackButtonEnabled : false,
        }

      case "AUTHORING_CARD_ANSWER_CHANGE":
        const newState = { ...state };
        if(newState.currentJournalEntry[action.data.questionId]){
          newState.currentJournalEntry[action.data.questionId][action.data.answerIndex] = action.data.answerContent;
        } else {
          newState.currentJournalEntry[action.data.questionId] = [];
          newState.currentJournalEntry[action.data.questionId][action.data.answerIndex] = action.data.answerContent;
        }
        return newState;

      case "LOG_IN_COMPLETE":
        return {
          ...state,
          isLoggedIn : true,
          currentUserInfo: action.data,
        }

      case "EXTERNAL_USER_DATA_CHANGE":
        return {
          ...state,
          currentUserInfo: action.data,
        }

      case "LOG_OUT_COMPLETE":
        return {
          ...state,
          isLoggedIn : false,
        }

      default:
        return initialState
    }
  }
});

export default reducers;
