import React from 'react';
import { ButtonFeedback } from './feedback.styled';

interface FeedbackOptionsProps {
  options: string[];
  onLeaveFeedback: any;
}

const FeedbackOptions: React.FC<FeedbackOptionsProps> = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <ButtonFeedback
          key={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </ButtonFeedback>
      ))}
    </>
  );
};

export default FeedbackOptions;
