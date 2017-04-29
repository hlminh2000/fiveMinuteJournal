import { connect } from 'react-redux';
import ParallaxCalendarList from '../components/ParallaxCalendarList/ParallaxCalendarList.js';
import Firebase from '../services/Firebase.js';
import Moment from 'moment';

const database = Firebase.database();
const today = Moment().format('YYYY-MM-DD');

const mapStateToProps = (state) => {
  return {
    selectedDate          : state.mainReducer.selectedDate,
    today                 : state.mainReducer.today,
    calendarStartDate     : state.mainReducer.calendarStartDate,
    currentJournalEntry   : state.mainReducer.currentJournalEntry,
  }
};

const setDateUpdateCycle = (dispatcher) =>{
  dispatcher({type: "END_OF_DAY", data: null});
  setTimeout(() => {
    setDateUpdateCycle(dispatcher);
  }, 1000);
}

const mapDispatchToProps = (dispatch) => {
  const currentUser = Firebase.auth().currentUser;
  const dispatchPosts = (posts) => {
    dispatch({type: "SELECTED_DATE_POST_FETCHED", data: posts.val()});
  }

  // setDateUpdateCycle(dispatch);

  return {
    onDateSelect: (date) => {
      return new Promise((resolve, reject) => {
        dispatch({type: "CALENDAR_LIST_DATE_SELECT", data: date});
        database.ref('posts/' + currentUser.uid + "/" + date).once('value', (posts)=>{
          resolve();
          dispatchPosts(posts);
          database.ref('posts/' + currentUser.uid + "/" + today).on('value', dispatchPosts);
        });
      });
    },
    onNextMonthPress:() => {
      dispatch({type: "CALENDAR_NEXT_MONTH_PRESSED", data: null});
    },
    onPrevMonthPress:() => {
      dispatch({type: "CALENDAR_PREV_MONTH_PRESSED", data: null});
    },
    onComponentDidMount: () => {
      database.ref('posts/' + currentUser.uid + "/" + today).once('value', dispatchPosts);
    }
  }
}

export default CON_ParallaxCalendarList = connect(mapStateToProps, mapDispatchToProps)(ParallaxCalendarList);
