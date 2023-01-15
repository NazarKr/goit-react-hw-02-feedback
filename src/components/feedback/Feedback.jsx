import React, { Component } from 'react';
import { FeedbackDiv, ButtonFeedback } from './feedback.styled';

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
    }

    positiveFeedback = () => {
        const positive = Math.round(
          (this.state.good * 100) /
            (this.state.good + this.state.neutral + this.state.bad)
        );
        return positive || '';
    }

  render() {
    return (
      <FeedbackDiv>
        <h1>Please leave feedback</h1>

        <ButtonFeedback type="button" onClick={this.hendleGoodFeedback}>
          Good
        </ButtonFeedback>
        <ButtonFeedback type="button" onClick={this.hendleNeutalFeedback}>
          Neutral
        </ButtonFeedback>
        <ButtonFeedback type="button" onClick={this.hendleBadFeedback}>
          Bad
        </ButtonFeedback>

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total Feedback: {this.totalFeedback()}</p>
        <p>Positive feedback: {this.positiveFeedback()} %</p>
      </FeedbackDiv>
    );
  }
}

export default Feedback;