import { connect } from 'react-redux';
import AuthoringCard from '../components/AuthoringCards/AuthoringCard.js';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    questionId: ownProps.questionId,
    inputCount: ownProps.inputCount,
    showIndex: ownProps.showIndex,
    headerText: ownProps.headerText,
    originalEntry: ownProps.originalEntry,
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

export default CON_AuthoringCard = connect(mapStateToProps, mapDispatchToProps)(AuthoringCard);
