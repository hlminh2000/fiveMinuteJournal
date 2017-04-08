import { connect } from 'react-redux';
import AuthoringCard1 from '../components/AuthoringCards/AuthoringCard1.js';

const mapStateToProps = (state, ownProps) => {
  return {
    questionId: ownProps.questionId,
    inputCount: ownProps.inputCount,
    showIndex: ownProps.showIndex,
    headerText: ownProps.headerText,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInputChange: (answerIndex, answerContent) => {
      dispatch({type: "AUTHORING_CARD_ANSWER_CHANGE", data: {
        questionId: ownProps.questionId,
        answerIndex: answerIndex,
        answerContent: answerContent,
      }});
    }
  }
}

export default CON_AuthoringCard1 = connect(mapStateToProps, mapDispatchToProps)(AuthoringCard1);
