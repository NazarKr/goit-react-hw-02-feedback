import React from 'react';
import { ButtonFeedback } from './feedback.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <ButtonFeedback
      key={option}
      onClick={()=> onLeaveFeedback(option)}
      type="button"
    >
      {option}
    </ButtonFeedback>
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  })),
  onLeaveFeedback: PropTypes.func.isRequired,
}