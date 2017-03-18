import { connect } from 'react-redux';
import ParallaxCalendarList from '../components/ParallaxCalendarList/ParallaxCalendarList.js';

const mapStateToProps = (state) => {
  return {
    selectedDate  : state.mainReducer.selectedDate,
    today         : state.mainReducer.today,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDateSelect: (date) => {
      dispatch({type: "CALENDAR_LIST_DATE_SELECT", data: date})
    }
  }
}

export default CON_ParallaxCalendarList = connect(mapStateToProps, mapDispatchToProps)(ParallaxCalendarList);
