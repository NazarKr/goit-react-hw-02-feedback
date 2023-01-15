import React, { Component } from 'react';
import {
  FeedbackDiv,
  ButtonFeedbackGood,
  ButtonFeedback,
  FeedbackSpan,
} from './feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  hendleNeutalFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  hendleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  totalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positiveFeedback = () => {
    const positive = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return positive || '';
  };

  render() {
    return (
      <FeedbackDiv>
        <h1>Please leave feedback</h1>

        <ButtonFeedbackGood type="button" onClick={this.hendleGoodFeedback}>
          Good
        </ButtonFeedbackGood>
        <ButtonFeedback type="button" onClick={this.hendleNeutalFeedback}>
          Neutral
        </ButtonFeedback>
        <ButtonFeedback primary type="button" onClick={this.hendleBadFeedback}>
          Bad
        </ButtonFeedback>

        <h2>Statistics</h2>
        <p>
          Good: <FeedbackSpan> {this.state.good} </FeedbackSpan>
        </p>
        <p>
          Neutral: <FeedbackSpan> {this.state.neutral}</FeedbackSpan>
        </p>
        <p>
          Bad: <FeedbackSpan>{this.state.bad} </FeedbackSpan>
        </p>
        <p>
          Total Feedback: <FeedbackSpan>{this.totalFeedback()} </FeedbackSpan>
        </p>
        <p>
          Positive feedback:{' '}
          <FeedbackSpan>{this.positiveFeedback()} % </FeedbackSpan>
        </p>
      </FeedbackDiv>
    );
  }
}

export default Feedback;
