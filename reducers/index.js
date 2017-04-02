import { combineReducers } from 'redux';
import Moment from 'moment';

const initialState = {
  hardwareBackButtonEnabled: true,
  selectedDate  : Moment().format('YYYY-MM-DD'),
  today         : Moment().format('YYYY-MM-DD'),
  isLoggedIn    : false,
}

const reducers = combineReducers({
  mainReducer:  (state, action) => {
    switch (action.type) {
      case "CALENDAR_LIST_DATE_SELECT":
        return {
          ...state,
          selectedDate : action.data,
        }
      case "ENTER_AUTHORING_PAGE":
        return {
          ...state,
          hardwareBackButtonEnabled : false,
        }
      case "LOG_IN_COMPLETE":
        return {
          ...state,
          isLoggedIn : true,
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
