import { connect } from 'react-redux';
import ParallaxCalendarList from '../components/ParallaxCalendarList/ParallaxCalendarList.js';
import Firebase from '../firebase/Firebase.js';

const database = Firebase.database();

const mapStateToProps = (state) => {
  return {
    selectedDate          : state.mainReducer.selectedDate,
    today                 : state.mainReducer.today,
    calendarStartDate     : state.mainReducer.calendarStartDate,
    currentPostShown      : state.mainReducer.currentPostShown,
  }
};

const mapDispatchToProps = (dispatch) => {
  const currentUser = Firebase.auth().currentUser;
  const dispatchPosts = (posts) => {
    dispatch({type: "SELECTED_DATE_POST_FETCHED", data: posts.val()});
  }

  return {
    onDateSelect: (date) => {
      dispatch({type: "CALENDAR_LIST_DATE_SELECT", data: date});
      database.ref('posts/' + currentUser.uid + "/" + date).on('value', dispatchPosts);
    },
    onNextMonthPress:() => {
      dispatch({type: "CALENDAR_NEXT_MONTH_PRESSED", data: null});
    },
    onPrevMonthPress:() => {
      dispatch({type: "CALENDAR_PREV_MONTH_PRESSED", data: null});
    }
  }
}

export default CON_ParallaxCalendarList = connect(mapStateToProps, mapDispatchToProps)(ParallaxCalendarList);
