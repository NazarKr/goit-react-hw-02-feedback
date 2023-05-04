import React from 'react';
import { FeedbeckText, FeedbackSpan } from './feedback.styled';

interface StatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: any;
  title?: string;
}

const Statistics: React.FC<StatisticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => (
  <>
    {title && <h2>{title}</h2>}
    <FeedbeckText>
      Good: <FeedbackSpan>{good}</FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Neutral: <FeedbackSpan>{neutral}</FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Bad: <FeedbackSpan>{bad}</FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Total Feedback: <FeedbackSpan>{total} </FeedbackSpan>
    </FeedbeckText>
    <FeedbeckText>
      Positive feedback: <FeedbackSpan>{positivePercentage} % </FeedbackSpan>
    </FeedbeckText>
  </>
);

export default Statistics;
