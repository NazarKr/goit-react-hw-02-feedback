import React, { Component } from 'react';
import { FeedbackDiv } from './feedback.styled';
import FeedbackOptions from './ButtonsComponents';
import Statistics from './Statistics'

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
            <FeedbackOptions
                options={ }
                onLeaveFeedback={ }
            />
            <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.totalFeedback()}
                positivePercentage={this.positiveFeedback()}
            />
      </FeedbackDiv>
    );
  }
}

export default Feedback;
