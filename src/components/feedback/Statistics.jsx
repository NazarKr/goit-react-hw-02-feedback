import React from 'react';
import { FeedbackSpan } from './feedback.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>
      Good: <FeedbackSpan>{good}</FeedbackSpan>
    </p>
    <p>
      Neutral: <FeedbackSpan>{neutral}</FeedbackSpan>
    </p>
    <p>
      Bad: <FeedbackSpan>{bad}</FeedbackSpan>
    </p>
    <p>
      Total Feedback: <FeedbackSpan>{total} </FeedbackSpan>
    </p>
    <p>
      Positive feedback: <FeedbackSpan>{positivePercentage} % </FeedbackSpan>
    </p>
  </div>
);

export default Statistics;
