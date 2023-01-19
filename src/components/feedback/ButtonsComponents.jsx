import React from 'react';
import { ButtonFeedback } from './feedback.styled';

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
